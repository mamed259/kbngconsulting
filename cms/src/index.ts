import type { Core } from "@strapi/strapi";
import { seedCanaryWavesPage } from "./bootstrap/seed-pages";
import { ensurePublicApiAccess } from "./bootstrap/ensure-permissions";
import { ensureLocalReadToken } from "./bootstrap/ensure-token";

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensurePublicApiAccess(strapi);
    await ensureLocalReadToken(strapi);
    await seedCanaryWavesPage(strapi);
  },
};
