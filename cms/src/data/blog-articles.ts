import articlesJson from "./blog-articles.json";

export interface BlogArticleSeed {
  title: string;
  slug: string;
  excerpt: string;
  publishedOn: string;
  topics?: string[];
  category?: "Founder Resources" | "Industrial Innovation" | "founder-resources" | "industrial-innovation";
  body: string;
  coverImageUrl?: string | null;
  coverImageAlt?: string | null;
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
  };
}

export const blogArticles = articlesJson as BlogArticleSeed[];
