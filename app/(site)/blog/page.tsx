import type { Metadata } from "next";
import { getArticles, getPageBySlug } from "@/lib/api";
import { fallbackArticles } from "@/content/blog-fallback";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { mergeArticles } from "@/lib/articles";
import { buildMetadataFromSeo } from "@/lib/seo";
import "../../blog.css";

const BLOG_FALLBACK = {
  title: "Industrial Innovation Resources | KB&G",
  description:
    "KB&G is a consulting and innovation firm helping industrial companies improve how they price, operate, and communicate.",
  url: "https://kbngconsulting.com/blog",
  absoluteTitle: true,
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("blog");
  return buildMetadataFromSeo(page?.seo, BLOG_FALLBACK);
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
