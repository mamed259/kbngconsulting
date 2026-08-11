import type { Core } from "@strapi/strapi";

type ScheduledArticle = {
  documentId: string;
  slug?: string | null;
  publishedOn?: string | null;
  scheduledAt?: string | null;
};

const cronTasks: Core.Config.Server["cron"]["tasks"] = {
  publishScheduledArticles: {
    task: async ({ strapi }: { strapi: Core.Strapi }) => {
      const now = new Date().toISOString();
      const articleDocuments = strapi.documents("api::article.article");

      const drafts = (await articleDocuments.findMany({
        status: "draft",
        filters: {
          scheduledAt: {
            $notNull: true,
            $lte: now,
          },
        },
        fields: ["slug", "scheduledAt", "publishedOn"],
      })) as ScheduledArticle[];

      if (!drafts.length) return;

      for (const article of drafts) {
        if (!article.documentId || !article.scheduledAt) continue;

        try {
          const dateOnly = article.scheduledAt.slice(0, 10);
          if (!article.publishedOn && /^\d{4}-\d{2}-\d{2}$/.test(dateOnly)) {
            await articleDocuments.update({
              documentId: article.documentId,
              status: "draft",
              data: {
                publishedOn: dateOnly,
              },
            });
          }

          await articleDocuments.publish({
            documentId: article.documentId,
          });

          strapi.log.info(
            `[cron] Published scheduled article: ${article.slug || article.documentId}`,
          );
        } catch (error) {
          strapi.log.error(
            `[cron] Failed publishing scheduled article ${article.slug || article.documentId}: ${String(error)}`,
          );
        }
      }
    },
    options: {
      rule: "*/5 * * * *",
    },
  },
};

export default cronTasks;
