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

/** Strip a trailing "| KB&G" so the root layout template doesn't double-brand. */
function stripBrandSuffix(title: string): string {
  return title.replace(/\s*\|\s*KB&G\s*$/i, "").trim();
}

/** Clamp CMS descriptions to the ~155 chars Google typically displays. */
export function clampMetaDescription(text: string, max = 155): string {
  const trimmed = text.trim();
  if (!trimmed || trimmed.length <= max) return trimmed;

  const slice = trimmed.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > 110 ? slice.slice(0, lastSpace) : slice;
  return `${cut.replace(/[\s.,;:–—-]+$/u, "")}…`;
}

/** Build Next.js Metadata from Strapi shared.seo, with code fallbacks. */
export function buildMetadataFromSeo(
  seo: SeoData | null | undefined,
  fallback: SeoFallback,
  options?: { fallbackOgImage?: unknown },
): Metadata {
  const rawTitle = seo?.metaTitle?.trim() || fallback.title;
  const description = clampMetaDescription(
    seo?.metaDescription?.trim() || fallback.description,
  );
  const canonical = seo?.canonicalUrl?.trim() || fallback.url;
  const ogImage = resolveOgImageUrl(seo, options?.fallbackOgImage) || fallback.ogImageUrl || undefined;

  // Avoid "Title | KB&G | KB&G" when CMS titles already include the brand suffix.
  let title: Metadata["title"];
  if (fallback.absoluteTitle) {
    title = { absolute: rawTitle };
  } else if (/\|\s*KB&G\s*$/i.test(rawTitle)) {
    title = { absolute: rawTitle };
  } else {
    title = stripBrandSuffix(rawTitle);
  }

  const ogTitle = typeof title === "object" && title && "absolute" in title
    ? title.absolute
    : rawTitle;

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
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
  const description = clampMetaDescription(
    input.seo?.metaDescription?.trim() || input.description,
  );
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
