import type { Metadata } from "next";
import { getArticles } from "@/lib/api";
import { fallbackArticles } from "@/content/blog-fallback";
import { BlogIndex } from "@/components/blog/BlogIndex";
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

export default async function BlogPage() {
  const articles = await getArticles();
  const list = articles.length > 0 ? articles : fallbackArticles;

  return (
    <div className="blog-page">
      <BlogIndex articles={list} />
    </div>
  );
}
