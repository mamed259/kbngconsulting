"use client";

import { useMemo, useState } from "react";
import type { ArticleCategory, ArticleData } from "@/types/strapi";
import { BlogListItem, FeaturedArticle } from "@/components/blog/BlogCards";

type FilterKey = "all" | ArticleCategory;

const FILTERS: Array<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "founder-resources", label: "Founder Resources" },
  { key: "industrial-innovation", label: "Industrial Innovation" },
];

function normalizeCategory(value: ArticleData["category"]): ArticleCategory | null {
  if (value === "founder-resources" || value === "industrial-innovation") return value;
  return null;
}

export function BlogIndex({ articles }: { articles: ArticleData[] }) {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return articles;
    return articles.filter((article) => normalizeCategory(article.category) === filter);
  }, [articles, filter]);

  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);

  return (
    <div className="blog-shell">
      <div className="blog-heading">
        <p className="blog-kicker">Resources</p>
        <h1>Blog</h1>
        <p className="blog-intro">
          Field notes on industrial AI, safety, operations, and building products that hold up in
          the real world.
        </p>

        <div className="blog-filters" role="tablist" aria-label="Blog categories">
          {FILTERS.map((item) => {
            const active = filter === item.key;
            return (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={active}
                className={`blog-filter${active ? " is-active" : ""}`}
                onClick={() => setFilter(item.key)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {featured ? <FeaturedArticle article={featured} /> : null}

      {rest.length ? (
        <div className="blog-feed">
          {rest.map((article) => (
            <BlogListItem key={article.slug} article={article} />
          ))}
        </div>
      ) : featured ? null : (
        <p className="blog-empty">
          {filter === "all"
            ? "New articles are on the way. Check back soon."
            : "No articles in this category yet."}
        </p>
      )}
    </div>
  );
}
