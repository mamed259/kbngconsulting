import type { Core } from "@strapi/strapi";
import { blogArticles, type BlogArticleSeed } from "../data/blog-articles";

const ARTICLE_UID = "api::article.article" as const;

/** Strip component ids so Strapi recreates SEO linked to this entity (avoids orphan-id errors). */
function sanitizeSeo<T extends Record<string, unknown>>(seo: T | null | undefined) {
  if (!seo || typeof seo !== "object") return seo;
  const { id: _id, documentId: _documentId, ...rest } = seo as T & {
    id?: unknown;
    documentId?: unknown;
  };
  return rest;
}

function sanitizeArticlePayload(data: BlogArticleSeed) {
  const payload = JSON.parse(JSON.stringify(data)) as BlogArticleSeed & {
    seo?: Record<string, unknown>;
  };
  if (payload.seo) {
    payload.seo = sanitizeSeo(payload.seo) as BlogArticleSeed["seo"];
  }
  return payload;
}

async function findArticleBySlug(strapi: Core.Strapi, slug: string) {
  const articles = await strapi.documents(ARTICLE_UID).findMany({
    filters: { slug: { $eq: slug } },
    status: "draft",
  });

  return articles[0] ?? null;
}

async function upsertArticle(strapi: Core.Strapi, data: BlogArticleSeed) {
  const payload = sanitizeArticlePayload(data);
  const existing = await findArticleBySlug(strapi, payload.slug);

  if (existing?.documentId) {
    await strapi.documents(ARTICLE_UID).update({
      documentId: existing.documentId,
      data: payload,
      status: "published",
    });
    strapi.log.info(`[seed] Updated article: ${payload.slug}`);
    return;
  }

  await strapi.documents(ARTICLE_UID).create({
    data: payload,
    status: "published",
  });
  strapi.log.info(`[seed] Created article: ${payload.slug}`);
}

async function seedArticle(strapi: Core.Strapi, data: BlogArticleSeed) {
  try {
    await upsertArticle(strapi, data);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const details =
      error && typeof error === "object" && "details" in error
        ? JSON.stringify((error as { details?: unknown }).details)
        : "";
    strapi.log.error(`[seed] Failed to seed article ${data.slug}: ${message} ${details}`);
  }
}

export async function seedBlogArticles(strapi: Core.Strapi) {
  for (const article of blogArticles) {
    await seedArticle(strapi, article);
  }
}

/** Re-link SEO components without stale ids (fixes admin save errors). */
export async function repairArticleSeoLinks(strapi: Core.Strapi) {
  const articles = await strapi.documents(ARTICLE_UID).findMany({
    populate: ["seo"],
    status: "draft",
    limit: 200,
  });

  for (const article of articles) {
    if (!article.documentId || !article.seo) continue;

    const seo = sanitizeSeo(article.seo as Record<string, unknown>);
    if (!seo) continue;

    try {
      await strapi.documents(ARTICLE_UID).update({
        documentId: article.documentId,
        data: { seo } as never,
        status: "published",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      strapi.log.warn(`[repair] SEO relink failed for ${article.slug}: ${message}`);
    }
  }

  strapi.log.info(`[repair] Relinked SEO on ${articles.length} article(s)`);
}

/** Content Manager: Articles list sorted by id ascending. */
export async function configureArticleListSort(strapi: Core.Strapi) {
  try {
    const service = strapi.plugin("content-manager").service("content-types");
    const uid = ARTICLE_UID;
    const current = await service.findConfiguration({ uid });

    await service.updateConfiguration(
      { uid },
      {
        ...current,
        settings: {
          ...current.settings,
          defaultSortBy: "id",
          defaultSortOrder: "ASC",
          mainField: current.settings?.mainField ?? "title",
        },
      },
    );

    strapi.log.info("[config] Article list default sort: id ASC");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    strapi.log.warn(`[config] Could not set article list sort: ${message}`);
  }
}
