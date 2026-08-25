import type { ArticleData } from "../types/strapi";
import { pickArticleBody } from "./article-body";
import { extractStrapiImageUrl } from "./utils";

/** Live Strapi fields win; fallback fills gaps only. */
export function mergeArticle(
  remote?: ArticleData | null,
  fallback?: ArticleData | null,
): ArticleData | null {
  if (!remote && !fallback) return null;
  if (!remote) return fallback ?? null;
  if (!fallback) return remote;

  const coverFromLive = extractStrapiImageUrl(remote.coverImage || remote.coverImageUrl);

  return {
    ...fallback,
    ...remote,
    id: remote.id ?? fallback.id,
    title: remote.title?.trim() || fallback.title,
    excerpt: remote.excerpt || fallback.excerpt,
    category: remote.category || fallback.category,
    publishedOn: remote.publishedOn || fallback.publishedOn,
    body: pickArticleBody(remote.body, fallback.body),
    coverImage: remote.coverImage || fallback.coverImage,
    coverImageUrl: coverFromLive || fallback.coverImageUrl,
    coverImageAlt: remote.coverImageAlt || fallback.coverImageAlt,
    seo: remote.seo || fallback.seo,
  };
}

/** Prefer fallback order; enrich every known slug with live Strapi content. */
export function mergeArticles(remote: ArticleData[], fallback: ArticleData[]): ArticleData[] {
  const remoteBySlug = new Map(remote.map((article) => [article.slug, article]));
  const merged = fallback.map((fb) => mergeArticle(remoteBySlug.get(fb.slug), fb)!);

  const known = new Set(merged.map((article) => article.slug));
  for (const article of remote) {
    if (!known.has(article.slug)) merged.push(article);
  }

  return merged.sort((a, b) => {
    const aTime = Date.parse(`${a.publishedOn}T00:00:00Z`);
    const bTime = Date.parse(`${b.publishedOn}T00:00:00Z`);
    if (aTime !== bTime) return bTime - aTime;
    return Number(b.id ?? 0) - Number(a.id ?? 0);
  });
}
