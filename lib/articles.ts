import type { ArticleData } from "@/types/strapi";
import { extractStrapiImageUrl } from "@/lib/utils";

/** Prefer fallback order/content; enrich with live Strapi fields when present. */
export function mergeArticles(remote: ArticleData[], fallback: ArticleData[]): ArticleData[] {
  const remoteBySlug = new Map(remote.map((article) => [article.slug, article]));
  const merged = fallback.map((fb) => {
    const live = remoteBySlug.get(fb.slug);
    if (!live) return fb;

    const liveBody = live.body?.length ?? 0;
    const fbBody = fb.body?.length ?? 0;
    const coverFromLive = extractStrapiImageUrl(live.coverImage || live.coverImageUrl);

    return {
      ...fb,
      id: live.id,
      coverImage: live.coverImage,
      coverImageUrl: coverFromLive || fb.coverImageUrl,
      coverImageAlt: live.coverImageAlt || fb.coverImageAlt,
      body: liveBody > fbBody ? live.body : fb.body,
      excerpt: live.excerpt || fb.excerpt,
      seo: live.seo || fb.seo,
    };
  });

  const known = new Set(merged.map((article) => article.slug));
  for (const article of remote) {
    if (!known.has(article.slug)) merged.push(article);
  }

  return merged;
}
