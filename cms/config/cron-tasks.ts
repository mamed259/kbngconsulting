import type { Core } from "@strapi/strapi";

type ScheduledArticle = {
  documentId: string;
  slug?: string | null;
  title?: string | null;
  body?: string | null;
  publishedOn?: string | null;
  scheduledAt?: string | null;
};

export async function publishDueScheduledArticles(strapi: Core.Strapi) {
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
    fields: ["documentId", "slug", "title", "body", "scheduledAt", "publishedOn"],
  })) as ScheduledArticle[];

  if (!drafts.length) {
    strapi.log.info(`[cron] Tick: no due scheduled articles at ${now}`);
    return;
  }

  strapi.log.info(`[cron] Tick: found ${drafts.length} due scheduled article(s) at ${now}`);

  for (const article of drafts) {
    if (!article.documentId || !article.scheduledAt) continue;
    const articleLabel = article.slug || article.title || article.documentId;

    // Strapi validates required fields on draft update/publish.
    // If body is null, publish will always fail until editor fills it.
    if (typeof article.body !== "string" || !article.body.trim()) {
      strapi.log.error(
        `[cron] Skipped scheduled article ${articleLabel}: required field "body" is empty`,
      );
      continue;
    }

    const dateOnly = article.scheduledAt.slice(0, 10);
    if (!article.publishedOn && /^\d{4}-\d{2}-\d{2}$/.test(dateOnly)) {
      try {
        await articleDocuments.update({
          documentId: article.documentId,
          status: "draft",
          data: {
            publishedOn: dateOnly,
          },
        });
      } catch (error) {
        strapi.log.error(
          `[cron] Failed updating publishedOn for ${articleLabel}: ${String(error)}`,
        );
        continue;
      }
    }

    try {
      await articleDocuments.publish({
        documentId: article.documentId,
      });

      strapi.log.info(`[cron] Published scheduled article: ${articleLabel}`);
    } catch (error) {
      strapi.log.error(`[cron] Failed publishing scheduled article ${articleLabel}: ${String(error)}`);
    }
  }
}

const cronTasks: Core.Config.Server["cron"]["tasks"] = {
  publishScheduledArticles: {
    task: async ({ strapi }: { strapi: Core.Strapi }) => {
      await publishDueScheduledArticles(strapi);
    },
    options: {
      rule: "*/1 * * * *",
    },
  },
};

export default cronTasks;
