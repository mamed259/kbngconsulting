import articlesJson from "./blog-articles.json";

export interface BlogArticleSeed {
  title: string;
  slug: string;
  excerpt: string;
  publishedOn: string;
  topics?: string[];
  body: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
  };
}

export const blogArticles = articlesJson as BlogArticleSeed[];
