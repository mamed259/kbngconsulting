import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/api";
import { fallbackArticles } from "@/content/blog-fallback";
import { MarketingEffects } from "@/components/MarketingEffects";
import "../blog.css";

export const metadata: Metadata = {
  title: "Industrial Innovation Resources | KB&G",
  description:
    "Insights on industrial safety, AI, mining operations, and workplace performance from KB&G Consulting.",
  openGraph: {
    title: "Industrial Innovation Resources | KB&G",
    description:
      "Insights on industrial safety, AI, mining operations, and workplace performance from KB&G Consulting.",
    type: "website",
    url: "https://kbngconsulting.com/blog",
  },
};

function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default async function BlogPage() {
  const articles = await getArticles();
  const list = articles.length > 0 ? articles : fallbackArticles;

  return (
    <div className="blog-page">
      <MarketingEffects />
      <section className="blog-hero">
        <div className="wrap">
          <span className="blog-kicker">Founders Resources</span>
          <h1>Industrial Innovation Resources</h1>
          <p className="lead">
            Field notes on industrial safety, AI, mining operations, and building resilient
            teams — from the KB&amp;G Consulting team.
          </p>
        </div>
      </section>

      <section className="blog-list">
        <div className="wrap">
          {list.length > 0 ? (
            <ul>
              {list.map((article) => (
                <li className="blog-row" key={article.slug}>
                  <Link href={`/blog/articles/${article.slug}`}>
                    <span className="blog-row-date">{formatDate(article.publishedOn)}</span>
                    <span className="blog-row-title">{article.title}</span>
                    <span className="blog-row-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="blog-empty">New articles are on the way. Check back soon.</p>
          )}
        </div>
      </section>
    </div>
  );
}
