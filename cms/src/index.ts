import type { Core } from "@strapi/strapi";
import { seedProductPages } from "./bootstrap/seed-pages";
import { seedBlogArticles } from "./bootstrap/seed-articles";
import { ensurePublicApiAccess } from "./bootstrap/ensure-permissions";
import { ensureLocalReadToken } from "./bootstrap/ensure-token";

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensurePublicApiAccess(strapi);
    await ensureLocalReadToken(strapi);
    await seedProductPages(strapi);
    await seedBlogArticles(strapi);
  },
};
