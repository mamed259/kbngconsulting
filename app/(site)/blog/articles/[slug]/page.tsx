import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/api";
import { getFallbackArticleBySlug } from "@/content/blog-fallback";
import { getStrapiMedia, extractStrapiImageUrl } from "@/lib/utils";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { formatBlogDate } from "@/components/blog/BlogCards";
import "../../../../blog.css";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

async function resolveArticle(slug: string) {
  const article = await getArticleBySlug(slug);
  if (article) return article;
  return getFallbackArticleBySlug(slug) ?? null;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await resolveArticle(slug);

  if (!article) return {};

  const seo = article.seo;
  const title = seo?.metaTitle ?? article.title;
  const description = seo?.metaDescription ?? article.excerpt ?? article.title;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: seo?.canonicalUrl ?? `https://kbngconsulting.com/blog/articles/${slug}`,
      ...(seo?.ogImage ? { images: [{ url: getStrapiMedia(seo.ogImage.url) }] } : {}),
    },
    ...(seo?.canonicalUrl ? { alternates: { canonical: seo.canonicalUrl } } : {}),
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await resolveArticle(slug);

  if (!article) {
    notFound();
  }

  const cover = extractStrapiImageUrl(article.coverImage || article.coverImageUrl);

  return (
    <div className="article-page">
      <article className="article-shell">
        <Link className="article-back" href="/blog">
          ← Back to Blog
        </Link>
        <time className="article-date" dateTime={article.publishedOn}>
          {formatBlogDate(article.publishedOn)}
        </time>
        <h1>{article.title}</h1>
        <div className="article-cover">
          {cover ? (
            <Image
              src={cover}
              alt={article.coverImageAlt || article.title}
              fill
              sizes="(min-width: 860px) 760px, 100vw"
              priority
              style={{ objectFit: "cover" }}
            />
          ) : (
            <span className="blog-cover-fallback" aria-hidden="true" />
          )}
        </div>
        {article.excerpt ? <p className="article-lead">{article.excerpt}</p> : null}
        <div className="article-body">
          <ArticleBody content={article.body} />
        </div>
      </article>
    </div>
  );
}
