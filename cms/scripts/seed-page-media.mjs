import process from "node:process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { hydrateImageUrls } from "./lib/hydrate-images.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");

const STRAPI_URL = (process.env.STRAPI_URL || "http://localhost:1337")
  .trim()
  .replace(/\/+$/, "")
  .replace(/\/admin$/, "")
  .replace(/\/api$/, "");
const STRAPI_TOKEN = process.env.STRAPI_SEED_TOKEN || process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error("Missing STRAPI_SEED_TOKEN or STRAPI_API_TOKEN.");
  process.exit(1);
}

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
    throw new Error(`${response.status} ${response.statusText} -> ${JSON.stringify(body)}`);
  }
  return body;
}

async function seedPage({ slug, jsonFile }) {
  const raw = JSON.parse(readFileSync(join(__dirname, "../src/data", jsonFile), "utf8"));
  console.log(`\n[${slug}] hydrating images…`);
  const data = await hydrateImageUrls(raw, {
    strapiUrl: STRAPI_URL,
    token: STRAPI_TOKEN,
    rootDir: ROOT,
  });

  // Attach SEO ogImage from first hero-like media if missing
  if (data.seo && !data.seo.ogImage) {
    const hero = (data.sections || []).find(
      (s) => s && typeof s === "object" && s.image && String(s.__component || "").includes("hero"),
    );
    if (hero?.image) data.seo.ogImage = hero.image;
  }

  const findQuery = new URLSearchParams();
  findQuery.set("filters[slug][$eq]", slug);
  findQuery.set("status", "draft");
  const existing = await strapiRequest(`/api/pages?${findQuery.toString()}`);
  const first = existing?.data?.[0];

  const payload = {
    data: {
      ...data,
      publishedAt: new Date().toISOString(),
    },
  };

  if (first) {
    const idOrDoc = first.documentId || first.id;
    await strapiRequest(`/api/pages/${idOrDoc}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    console.log(`[${slug}] updated ${idOrDoc}`);
    return;
  }

  const created = await strapiRequest("/api/pages", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log(`[${slug}] created ${created?.data?.documentId || created?.data?.id}`);
}

const PAGES = [
  { slug: "canary-waves", jsonFile: "canary-waves-page.json" },
  { slug: "georgia", jsonFile: "georgia-page.json" },
  { slug: "vision-ai", jsonFile: "vision-ai-page.json" },
  { slug: "innovation-studio", jsonFile: "innovation-studio-page.json" },
  { slug: "consulting-services", jsonFile: "consulting-services-page.json" },
  { slug: "founder-diagnostic", jsonFile: "founder-diagnostic-page.json" },
];

async function run() {
  const only = process.argv[2];
  const list = only ? PAGES.filter((p) => p.slug === only) : PAGES;
  if (!list.length) {
    console.error(`Unknown slug: ${only}`);
    process.exit(1);
  }

  console.log(`Seeding ${list.length} page(s) to ${STRAPI_URL}`);
  for (const page of list) {
    try {
      await seedPage(page);
    } catch (error) {
      console.error(`[${page.slug}] failed:`, error.message);
    }
  }
}

run().catch((error) => {
  console.error("Seed failed:", error.message);
  process.exit(1);
});
