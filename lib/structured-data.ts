import type { ArticleData, PageData } from "@/types/strapi";
import { extractStrapiImageUrl } from "@/lib/utils";
import { clampMetaDescription } from "@/lib/seo";
import {
  ORGANIZATION_ID,
  SERVICE_PAGE_SLUGS,
  SITE_LOGO,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_SAME_AS,
  WEBSITE_ID,
} from "@/lib/site";

export type JsonLdNode = Record<string, unknown>;

function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return `${SITE_ORIGIN}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export function organizationNode(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO,
    },
    sameAs: SITE_SAME_AS,
  };
}

export function websiteNode(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function organizationGraph(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode()],
  };
}

export function serviceGraph(page: Pick<PageData, "slug" | "title" | "seo">): JsonLdNode | null {
  if (!SERVICE_PAGE_SLUGS.has(page.slug)) return null;

  const url = `${SITE_ORIGIN}/${page.slug}`;
  const name = page.seo?.metaTitle?.trim() || page.title;
  const description = clampMetaDescription(page.seo?.metaDescription?.trim() || page.title);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": ORGANIZATION_ID },
  };
}

export function blogPostingGraph(article: ArticleData): JsonLdNode {
  const url = `${SITE_ORIGIN}/blog/${article.slug}`;
  const headline = article.seo?.metaTitle?.trim() || article.title;
  const description = clampMetaDescription(
    article.seo?.metaDescription?.trim() || article.excerpt || article.title,
  );
  const image = extractStrapiImageUrl(article.coverImage || article.coverImageUrl);

  const posting: JsonLdNode = {
    "@type": "BlogPosting",
    headline,
    description,
    datePublished: article.publishedOn,
    url,
    mainEntityOfPage: url,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };

  if (image) posting.image = absoluteUrl(image);

  return {
    "@context": "https://schema.org",
    "@graph": [
      posting,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}/blog` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}

export function blogItemListGraph(
  articles: Array<Pick<ArticleData, "slug" | "title">>,
): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_ORIGIN}/blog/${article.slug}`,
      name: article.title,
    })),
  };
}
