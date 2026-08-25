import type { Core } from "@strapi/strapi";

const PAGE_UID = "api::page.page";
const ARTICLE_UID = "api::article.article";
const MUTATING_ACTIONS = new Set(["create", "update", "delete", "publish", "unpublish"]);

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function pickSlug(ctx: { params?: unknown }, result: unknown): string | undefined {
  const fromResult = asRecord(result)?.slug;
  if (typeof fromResult === "string" && fromResult) return fromResult;

  const params = asRecord(ctx.params);
  const data = asRecord(params?.data);
  if (typeof data?.slug === "string" && data.slug) return data.slug;

  return undefined;
}

export function shouldNotifyFrontend(ctx: { uid?: string; action?: string; params?: unknown }) {
  if (ctx.uid !== PAGE_UID && ctx.uid !== ARTICLE_UID) return false;
  if (!MUTATING_ACTIONS.has(ctx.action || "")) return false;

  if (ctx.action === "create" || ctx.action === "update") {
    const params = asRecord(ctx.params);
    return params?.status === "published";
  }

  return true;
}

export async function notifyFrontend(
  strapi: Core.Strapi,
  ctx: { uid?: string; action?: string; params?: unknown },
  result: unknown,
) {
  const frontendUrl = (process.env.FRONTEND_URL || "").replace(/\/+$/, "");
  const secret = process.env.NEXT_REVALIDATE_SECRET;
  if (!frontendUrl || !secret) {
    return;
  }

  const model = ctx.uid === ARTICLE_UID ? "article" : "page";
  const payload = {
    model,
    slug: pickSlug(ctx, result),
    event: ctx.action,
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(`${frontendUrl}/api/revalidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-revalidate-secret": secret,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      strapi.log.warn(
        `[revalidate] Frontend returned ${response.status} for ${model} ${payload.slug || ""}`,
      );
      return;
    }

    strapi.log.info(`[revalidate] Notified frontend for ${model} ${payload.slug || ctx.action}`);
  } catch (error) {
    strapi.log.warn(`[revalidate] Failed to notify frontend: ${String(error)}`);
  } finally {
    clearTimeout(timer);
  }
}
