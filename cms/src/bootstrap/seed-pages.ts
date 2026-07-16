import type { Core } from "@strapi/strapi";
import { canaryWavesPageData } from "../data/canary-waves-page";

const PAGE_UID = "api::page.page" as const;

async function findPageBySlug(strapi: Core.Strapi, slug: string) {
  const pages = await strapi.documents(PAGE_UID).findMany({
    filters: { slug: { $eq: slug } },
    status: "draft",
  });

  return pages[0] ?? null;
}

async function upsertPage(strapi: Core.Strapi, data: typeof canaryWavesPageData) {
  const payload = JSON.parse(JSON.stringify(data));
  const existing = await findPageBySlug(strapi, payload.slug);

  if (existing?.documentId) {
    await strapi.documents(PAGE_UID).update({
      documentId: existing.documentId,
      data: payload,
      status: "published",
    });
    strapi.log.info(`[seed] Updated page: ${payload.slug}`);
    return;
  }

  await strapi.documents(PAGE_UID).create({
    data: payload,
    status: "published",
  });
  strapi.log.info(`[seed] Created page: ${payload.slug}`);
}

export async function seedCanaryWavesPage(strapi: Core.Strapi) {
  try {
    await upsertPage(strapi, canaryWavesPageData);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const details =
      error && typeof error === "object" && "details" in error
        ? JSON.stringify((error as { details?: unknown }).details)
        : "";
    strapi.log.error(`[seed] Failed to seed canary-waves page: ${message} ${details}`);
  }
}
