import type { ArticleData } from "@/types/strapi";
import { BlogListItem, FeaturedArticle } from "@/components/blog/BlogCards";

export function BlogIndex({ articles }: { articles: ArticleData[] }) {
  const featured = articles[0] ?? null;
  const rest = articles.slice(1);

  return (
    <div className="blog-shell">
      <div className="blog-heading">
        <p className="blog-kicker">Resources</p>
        <h1>Blog</h1>
        <p className="blog-intro">
          Field notes on industrial AI, safety, operations, and building products that hold up in
          the real world.
        </p>
      </div>

      {featured ? <FeaturedArticle article={featured} /> : null}

      {rest.length ? (
        <div className="blog-feed">
          {rest.map((article) => (
            <BlogListItem key={article.slug} article={article} />
          ))}
        </div>
      ) : featured ? null : (
        <p className="blog-empty">New articles are on the way. Check back soon.</p>
      )}
    </div>
  );
}
