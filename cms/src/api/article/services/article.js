"use strict";

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::article.article", ({ strapi }) => ({
  async publishScheduledDrafts() {
    const now = new Date().toISOString();
    const articleDocuments = strapi.documents("api::article.article");
    const drafts = await articleDocuments.findMany({
      status: "draft",
      filters: {
        scheduledAt: {
          $notNull: true,
          $lte: now,
        },
      },
      fields: ["documentId", "slug", "scheduledAt", "publishedOn"],
    });

    if (!drafts.length) {
      return { now, checked: 0, published: 0, failed: 0 };
    }

    let published = 0;
    let failed = 0;

    for (const article of drafts) {
      const documentId = article?.documentId;
      const scheduledAt = article?.scheduledAt;
      const slug = article?.slug || documentId;

      if (!documentId || !scheduledAt) continue;

      try {
        const dateOnly = String(scheduledAt).slice(0, 10);
        if (!article?.publishedOn && /^\d{4}-\d{2}-\d{2}$/.test(dateOnly)) {
          await articleDocuments.update({
            documentId,
            status: "draft",
            data: { publishedOn: dateOnly },
          });
        }

        await articleDocuments.publish({ documentId });
        published += 1;
        strapi.log.info(`[scheduled-publish] Published article: ${slug}`);
      } catch (error) {
        failed += 1;
        strapi.log.error(`[scheduled-publish] Failed article ${slug}: ${String(error)}`);
      }
    }

    return {
      now,
      checked: drafts.length,
      published,
      failed,
    };
  },
}));
