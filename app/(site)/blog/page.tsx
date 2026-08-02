import type { Metadata } from "next";
import { getArticles } from "@/lib/api";
import { fallbackArticles } from "@/content/blog-fallback";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { extractStrapiImageUrl } from "@/lib/utils";
import type { ArticleData } from "@/types/strapi";
import "../../blog.css";

export const metadata: Metadata = {
  title: "Industrial Innovation Resources | KB&G",
  description:
    "KB&G is a consulting and innovation firm helping industrial companies improve how they price, operate, and communicate.",
  openGraph: {
    title: "Industrial Innovation Resources | KB&G",
    description:
      "KB&G is a consulting and innovation firm helping industrial companies improve how they price, operate, and communicate.",
    type: "website",
    url: "https://kbngconsulting.com/blog",
  },
};

function mergeArticles(remote: ArticleData[], fallback: ArticleData[]): ArticleData[] {
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

export default async function BlogPage() {
  const articles = await getArticles();
  const list = mergeArticles(articles, fallbackArticles);

  return (
    <div className="blog-page">
      <BlogIndex articles={list} />
    </div>
  );
}
