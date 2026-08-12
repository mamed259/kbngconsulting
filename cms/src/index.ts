import type { Core } from "@strapi/strapi";
import {
  seedBlogArticles,
  repairArticleSeoLinks,
  configureArticleListSort,
} from "./bootstrap/seed-articles";
import { seedProductPages } from "./bootstrap/seed-pages";
import { ensurePublicApiAccess } from "./bootstrap/ensure-permissions";
import { ensureLocalReadToken } from "./bootstrap/ensure-token";
import { publishDueScheduledArticles } from "../config/cron-tasks";

const ARTICLE_UID = "api::article.article";
const SCHEDULE_POLL_MS = 3_600_000;
const schedulerGlobalKey = "__kbngScheduledPublisherStarted";

function startScheduledPublisher(strapi: Core.Strapi) {
  const globalState = globalThis as typeof globalThis & {
    [schedulerGlobalKey]?: boolean;
  };

  if (globalState[schedulerGlobalKey]) {
    strapi.log.info("[scheduler] Scheduled publisher already started");
    return;
  }

  globalState[schedulerGlobalKey] = true;

  setInterval(async () => {
    try {
      await publishDueScheduledArticles(strapi);
    } catch (error) {
      strapi.log.error(`[scheduler] Tick failed: ${String(error)}`);
    }
  }, SCHEDULE_POLL_MS);

  strapi.log.info(
    `[scheduler] Started scheduled publisher fallback (every ${SCHEDULE_POLL_MS / 1000}s)`,
  );
}

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

    if (ctx.uid === ARTICLE_UID && typeof data.scheduledAt === "string") {
      const scheduledDate = new Date(data.scheduledAt);
      if (!Number.isNaN(scheduledDate.getTime())) {
        // Normalize to exact hour so editors schedule by hour only.
        scheduledDate.setUTCMinutes(0, 0, 0);
        data.scheduledAt = scheduledDate.toISOString();
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
    await publishDueScheduledArticles(strapi);
    startScheduledPublisher(strapi);
  },
};
