import Image from "next/image";
import Link from "next/link";
import type { ArticleData } from "@/types/strapi";
import { extractStrapiImageUrl } from "@/lib/utils";

function formatBlogDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return dateString;
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${day}. ${month}. ${year}`;
}

function coverSrc(article: ArticleData): string | null {
  return extractStrapiImageUrl(article.coverImage || article.coverImageUrl) || null;
}

export function BlogCover({
  article,
  className,
  sizes,
  priority,
}: {
  article: ArticleData;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const src = coverSrc(article);
  return (
    <div className={className ?? "blog-cover"}>
      {src ? (
        <Image
          src={src}
          alt={article.coverImageAlt || article.title}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <span className="blog-cover-fallback" aria-hidden="true" />
      )}
    </div>
  );
}

export { formatBlogDate, coverSrc };

export function FeaturedArticle({ article }: { article: ArticleData }) {
  return (
    <Link className="blog-featured" href={`/blog/articles/${article.slug}`}>
      <BlogCover article={article} className="blog-featured-media" sizes="(min-width: 900px) 52vw, 100vw" priority />
      <div className="blog-featured-copy">
        <time dateTime={article.publishedOn}>{formatBlogDate(article.publishedOn)}</time>
        <h2>{article.title}</h2>
        {article.excerpt ? <p>{article.excerpt}</p> : null}
      </div>
    </Link>
  );
}

export function BlogListItem({ article }: { article: ArticleData }) {
  return (
    <Link className="blog-item" href={`/blog/articles/${article.slug}`}>
      <div className="blog-item-copy">
        <time dateTime={article.publishedOn}>{formatBlogDate(article.publishedOn)}</time>
        <h3>{article.title}</h3>
      </div>
      <BlogCover article={article} className="blog-item-media" sizes="180px" />
    </Link>
  );
}
