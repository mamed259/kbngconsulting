import type { ArticleData } from "@/types/strapi";
import articlesJson from "@/content/blog-articles.json";

let nextId = 9000;
function id() {
  return nextId++;
}

interface BlogArticleSeed {
  title: string;
  slug: string;
  excerpt: string;
  publishedOn: string;
  topics?: string[];
  body: string;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
  };
}

const seeds = articlesJson as BlogArticleSeed[];

export const fallbackArticles: ArticleData[] = seeds.map((seed) => ({
  id: id(),
  slug: seed.slug,
  title: seed.title,
  excerpt: seed.excerpt,
  publishedOn: seed.publishedOn,
  topics: seed.topics,
  body: seed.body,
  coverImageUrl: seed.coverImageUrl || undefined,
  coverImageAlt: seed.coverImageAlt || seed.title,
  seo: {
    metaTitle: seed.seo?.metaTitle || seed.title,
    metaDescription: seed.seo?.metaDescription || seed.excerpt,
    canonicalUrl: seed.seo?.canonicalUrl || `https://kbngconsulting.com/blog/articles/${seed.slug}`,
  },
}));

export function getFallbackArticleBySlug(slug: string): ArticleData | undefined {
  return fallbackArticles.find((article) => article.slug === slug);
}
