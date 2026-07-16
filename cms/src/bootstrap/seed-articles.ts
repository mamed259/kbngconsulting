import type { Core } from "@strapi/strapi";
import { blogArticles, type BlogArticleSeed } from "../data/blog-articles";

const ARTICLE_UID = "api::article.article" as const;

async function findArticleBySlug(strapi: Core.Strapi, slug: string) {
  const articles = await strapi.documents(ARTICLE_UID).findMany({
    filters: { slug: { $eq: slug } },
    status: "draft",
  });

  return articles[0] ?? null;
}

async function upsertArticle(strapi: Core.Strapi, data: BlogArticleSeed) {
  const payload = JSON.parse(JSON.stringify(data));
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
