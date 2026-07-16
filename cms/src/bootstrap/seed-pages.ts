import type { Core } from "@strapi/strapi";
import { canaryWavesPageData } from "../data/canary-waves-page";
import { visionAiPageData } from "../data/vision-ai-page";
import { innovationStudioPageData } from "../data/innovation-studio-page";
import { consultingServicesPageData } from "../data/consulting-services-page";
import { aboutUsPageData } from "../data/about-us-page";

const PAGE_UID = "api::page.page" as const;

async function findPageBySlug(strapi: Core.Strapi, slug: string) {
  const pages = await strapi.documents(PAGE_UID).findMany({
    filters: { slug: { $eq: slug } },
    status: "draft",
  });

  return pages[0] ?? null;
}

async function upsertPage(strapi: Core.Strapi, data: Record<string, unknown> & { slug: string }) {
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

async function seedPage(strapi: Core.Strapi, data: Record<string, unknown> & { slug: string }) {
  try {
    await upsertPage(strapi, data);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const details =
      error && typeof error === "object" && "details" in error
        ? JSON.stringify((error as { details?: unknown }).details)
        : "";
    strapi.log.error(`[seed] Failed to seed ${data.slug}: ${message} ${details}`);
  }
}

export async function seedCanaryWavesPage(strapi: Core.Strapi) {
  await seedPage(strapi, canaryWavesPageData as unknown as Record<string, unknown> & { slug: string });
}

export async function seedVisionAiPage(strapi: Core.Strapi) {
  await seedPage(strapi, visionAiPageData as unknown as Record<string, unknown> & { slug: string });
}

export async function seedInnovationStudioPage(strapi: Core.Strapi) {
  await seedPage(
    strapi,
    innovationStudioPageData as unknown as Record<string, unknown> & { slug: string },
  );
}

export async function seedConsultingServicesPage(strapi: Core.Strapi) {
  await seedPage(
    strapi,
    consultingServicesPageData as unknown as Record<string, unknown> & { slug: string },
  );
}

export async function seedAboutUsPage(strapi: Core.Strapi) {
  await seedPage(strapi, aboutUsPageData as unknown as Record<string, unknown> & { slug: string });
}

export async function seedProductPages(strapi: Core.Strapi) {
  await seedCanaryWavesPage(strapi);
  await seedVisionAiPage(strapi);
  await seedInnovationStudioPage(strapi);
  await seedConsultingServicesPage(strapi);
  await seedAboutUsPage(strapi);
}
