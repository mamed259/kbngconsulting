import process from "node:process";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { uploadMediaFile } from "./lib/upload-media.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");
const blogArticles = JSON.parse(
  readFileSync(join(__dirname, "../src/data/blog-articles.json"), "utf8"),
);

const STRAPI_URL = (process.env.STRAPI_URL || "http://localhost:1337")
  .trim()
  .replace(/\/+$/, "")
  .replace(/\/admin$/, "")
  .replace(/\/api$/, "");
const STRAPI_TOKEN = process.env.STRAPI_SEED_TOKEN || process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error("Missing STRAPI_SEED_TOKEN or STRAPI_API_TOKEN. Export one before running seed.");
  process.exit(1);
}

const ALLOWED_SLUGS = new Set(blogArticles.map((article) => article.slug));

async function strapiRequest(path, init = {}) {
  const response = await fetch(`${STRAPI_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      ...(init.headers || {}),
    },
  });

  const text = await response.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error(
        `${response.status} Forbidden — API token needs Full Access with Article create/update/publish/delete + Upload permissions.`,
      );
    }
    throw new Error(`${response.status} ${response.statusText} -> ${JSON.stringify(body)}`);
  }

  return body;
}

function publicPathFromUrl(url) {
  if (!url || typeof url !== "string") return null;
  if (!url.startsWith("/images/")) return null;
  return join(ROOT, "public", url.replace(/^\//, ""));
}

async function resolveCoverMedia(article) {
  const filePath = publicPathFromUrl(article.coverImageUrl);
  if (!filePath || !existsSync(filePath)) {
    console.warn(`[seed] No local cover for ${article.slug}: ${article.coverImageUrl}`);
    return null;
  }

  return uploadMediaFile({
    strapiUrl: STRAPI_URL,
    token: STRAPI_TOKEN,
    filePath,
    fileName: `${article.slug}${filePath.slice(filePath.lastIndexOf("."))}`,
    alt: article.coverImageAlt || article.title,
  });
}

const inlineMediaCache = new Map();

async function rewriteBodyImages(body, slug) {
  if (!body || typeof body !== "string") return body;

  const paths = new Set();
  for (const match of body.matchAll(/\/images\/blog\/[A-Za-z0-9._-]+/g)) {
    paths.add(match[0]);
  }

  let next = body;
  for (const path of paths) {
    let uploaded = inlineMediaCache.get(path);
    if (!uploaded) {
      const filePath = publicPathFromUrl(path);
      if (!filePath || !existsSync(filePath)) {
        console.warn(`[seed] Missing inline image ${path} (${slug})`);
        continue;
      }
      uploaded = await uploadMediaFile({
        strapiUrl: STRAPI_URL,
        token: STRAPI_TOKEN,
        filePath,
        fileName: path.split("/").pop(),
        alt: `${slug} inline`,
      });
      if (uploaded?.url) {
        inlineMediaCache.set(path, uploaded);
        console.log(`  inline media ${uploaded.id} ← ${path}`);
      }
    }
    if (uploaded?.url) {
      next = next.split(path).join(uploaded.url);
    }
  }
  return next;
}

async function articlePayload(article) {
  const cover = await resolveCoverMedia(article);
  const coverId = cover?.id || null;
  const { coverImageUrl, coverImageAlt, seo, body, ...rest } = article;
  const rewrittenBody = await rewriteBodyImages(body, article.slug);

  const seoPayload = {
    metaTitle: seo?.metaTitle || article.title,
    metaDescription: seo?.metaDescription || article.excerpt || article.title,
    canonicalUrl: seo?.canonicalUrl || `https://kbngconsulting.com/blog/${article.slug}`,
    ...(coverId ? { ogImage: coverId } : {}),
  };

  return {
    data: {
      ...rest,
      body: rewrittenBody,
      coverImageAlt: coverImageAlt || article.title,
      // Keep string fallback for offline/Next public assets during transition
      coverImageUrl: coverImageUrl || null,
      ...(coverId ? { coverImage: coverId } : {}),
      seo: seoPayload,
      publishedAt: new Date(`${article.publishedOn}T12:00:00.000Z`).toISOString(),
    },
  };
}

async function listAllArticles() {
  const articles = [];
  let page = 1;
  for (;;) {
    const query = new URLSearchParams();
    query.set("pagination[page]", String(page));
    query.set("pagination[pageSize]", "100");
    query.set("fields[0]", "slug");
    query.set("status", "draft");
    const response = await strapiRequest(`/api/articles?${query.toString()}`);
    const batch = response?.data || [];
    articles.push(...batch);
    const pageCount = response?.meta?.pagination?.pageCount || 1;
    if (page >= pageCount || batch.length === 0) break;
    page += 1;
  }
  return articles;
}

async function seedOne(article) {
  const findQuery = new URLSearchParams();
  findQuery.set("filters[slug][$eq]", article.slug);
  findQuery.set("status", "draft");

  const existing = await strapiRequest(`/api/articles?${findQuery.toString()}`);
  const first = existing?.data?.[0];
  const payload = await articlePayload(article);

  if (first) {
    const idOrDoc = first.documentId || first.id;
    const updated = await strapiRequest(`/api/articles/${idOrDoc}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    console.log(
      "Updated article:",
      article.slug,
      updated?.data?.id || idOrDoc,
      payload.data.coverImage ? `(cover media ${payload.data.coverImage})` : "(no cover media)",
    );
    return;
  }

  const created = await strapiRequest("/api/articles", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log(
    "Created article:",
    article.slug,
    created?.data?.id || created?.data?.documentId,
    payload.data.coverImage ? `(cover media ${payload.data.coverImage})` : "(no cover media)",
  );
}

async function pruneExtras() {
  const remote = await listAllArticles();
  let deleted = 0;
  for (const item of remote) {
    const slug = item.slug || item.attributes?.slug;
    const idOrDoc = item.documentId || item.id;
    if (!slug || !idOrDoc) continue;
    if (ALLOWED_SLUGS.has(slug)) continue;

    await strapiRequest(`/api/articles/${idOrDoc}`, { method: "DELETE" });
    console.log("Deleted extra article:", slug, idOrDoc);
    deleted += 1;
  }
  console.log(`Pruned ${deleted} article(s) not in allowlist (${ALLOWED_SLUGS.size} kept).`);
}

async function seedBlogIndexPage() {
  const slug = "blog";
  const findQuery = new URLSearchParams();
  findQuery.set("filters[slug][$eq]", slug);
  findQuery.set("status", "draft");
  const existing = await strapiRequest(`/api/pages?${findQuery.toString()}`);
  const first = existing?.data?.[0];

  const payload = {
    data: {
      title: "Industrial Innovation Resources",
      slug,
      seo: {
        metaTitle: "Industrial Innovation Resources | KB&G",
        metaDescription:
          "KB&G is a consulting and innovation firm helping industrial companies improve how they price, operate, and communicate.",
        canonicalUrl: "https://kbngconsulting.com/blog",
      },
      sections: [],
      publishedAt: new Date().toISOString(),
    },
  };

  if (first) {
    const idOrDoc = first.documentId || first.id;
    await strapiRequest(`/api/pages/${idOrDoc}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    console.log("Updated blog index page SEO");
    return;
  }

  await strapiRequest("/api/pages", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log("Created blog index page SEO");
}

async function run() {
  console.log(`Seeding ${blogArticles.length} articles to ${STRAPI_URL}`);
  for (const article of blogArticles) {
    try {
      await seedOne(article);
    } catch (error) {
      console.error(`Failed to seed article ${article.slug}:`, error.message);
    }
  }

  try {
    await pruneExtras();
  } catch (error) {
    console.error("Failed to prune extras:", error.message);
  }

  try {
    await seedBlogIndexPage();
  } catch (error) {
    console.error("Failed to seed blog index page:", error.message);
  }
}

run().catch((error) => {
  console.error("Seed failed:", error.message);
  process.exit(1);
});
