import type { Core } from "@strapi/strapi";
import {
  seedBlogArticles,
  repairArticleSeoLinks,
  configureArticleListSort,
} from "./bootstrap/seed-articles";
import { seedProductPages } from "./bootstrap/seed-pages";
import { ensurePublicApiAccess } from "./bootstrap/ensure-permissions";
import { ensureLocalReadToken } from "./bootstrap/ensure-token";

/** Prevent "components in seo are not related to the entity" on save/update. */
function registerSeoSanitizeMiddleware(strapi: Core.Strapi) {
  strapi.documents.use(async (ctx, next) => {
    const params = ctx.params as { data?: Record<string, unknown> } | undefined;
    const data = params?.data;
    if (!data || typeof data !== "object") {
      return next();
    }

    if (data.seo && typeof data.seo === "object" && !Array.isArray(data.seo)) {
      const seo = data.seo as Record<string, unknown>;
      if ("id" in seo || "documentId" in seo) {
        const { id: _id, documentId: _documentId, ...rest } = seo;
        data.seo = rest;
      }
    }

    return next();
  });
}

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    registerSeoSanitizeMiddleware(strapi);
  },

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensurePublicApiAccess(strapi);
    await ensureLocalReadToken(strapi);
    await seedProductPages(strapi);
    await seedBlogArticles(strapi);
    await repairArticleSeoLinks(strapi);
    await configureArticleListSort(strapi);
  },
};
