"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async publishScheduled(ctx) {
    const expectedSecret = process.env.CRON_SECRET;
    const providedSecret =
      ctx.request?.headers?.["x-cron-secret"] ||
      ctx.request?.query?.secret ||
      ctx.request?.body?.secret;

    if (expectedSecret && providedSecret !== expectedSecret) {
      return ctx.unauthorized("Invalid cron secret");
    }

    const service = strapi.service("api::article.article");
    const result = await service.publishScheduledDrafts();
    ctx.send({ ok: true, ...result });
  },
}));
