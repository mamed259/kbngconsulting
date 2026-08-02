import type { Metadata } from "next";
import type { SeoData } from "@/types/strapi";
import { extractStrapiImageUrl, getStrapiMedia } from "@/lib/utils";

export type SeoFallback = {
  title: string;
  description: string;
  url?: string;
  absoluteTitle?: boolean;
  ogImageUrl?: string | null;
};

function resolveOgImageUrl(
  seo?: SeoData | null,
  fallbackImage?: unknown,
): string | undefined {
  const fromSeo = seo?.ogImage ? getStrapiMedia(seo.ogImage.url) : "";
  if (fromSeo) return fromSeo;

  const fromFallback = extractStrapiImageUrl(fallbackImage);
  return fromFallback || undefined;
}

/** Build Next.js Metadata from Strapi shared.seo, with code fallbacks. */
export function buildMetadataFromSeo(
  seo: SeoData | null | undefined,
  fallback: SeoFallback,
  options?: { fallbackOgImage?: unknown },
): Metadata {
  const title = seo?.metaTitle?.trim() || fallback.title;
  const description = seo?.metaDescription?.trim() || fallback.description;
  const canonical = seo?.canonicalUrl?.trim() || fallback.url;
  const ogImage = resolveOgImageUrl(seo, options?.fallbackOgImage) || fallback.ogImageUrl || undefined;

  return {
    title: fallback.absoluteTitle ? { absolute: title } : title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      ...(canonical ? { url: canonical } : {}),
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    ...(canonical ? { alternates: { canonical } } : {}),
  };
}

export function buildArticleMetadata(input: {
  seo?: SeoData | null;
  title: string;
  description: string;
  slug: string;
  coverImage?: unknown;
  coverImageUrl?: string | null;
}): Metadata {
  const canonical =
    input.seo?.canonicalUrl?.trim() ||
    `https://kbngconsulting.com/blog/${input.slug}`;

  const title = input.seo?.metaTitle?.trim() || input.title;
  const description = input.seo?.metaDescription?.trim() || input.description;
  const ogImage =
    resolveOgImageUrl(input.seo, input.coverImage) ||
    extractStrapiImageUrl(input.coverImageUrl) ||
    undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage.startsWith("http")
                  ? ogImage
                  : ogImage.startsWith("/")
                    ? `https://kbngconsulting.com${ogImage}`
                    : ogImage,
              },
            ],
          }
        : {}),
    },
    alternates: { canonical },
  };
}
