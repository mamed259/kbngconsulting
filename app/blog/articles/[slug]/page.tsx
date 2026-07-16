import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/api";
import { getFallbackArticleBySlug } from "@/content/blog-fallback";
import { getStrapiMedia } from "@/lib/utils";
import { MarketingEffects } from "@/components/MarketingEffects";
import { MarkdownBody } from "@/components/blog/MarkdownBody";
import "../../../blog.css";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

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

  return (
    <div className="article-page">
      <MarketingEffects />
      <section className="article-hero">
        <div className="wrap">
          <Link className="article-back" href="/blog">
            ← Back to Blog
          </Link>
          <span className="article-date">{formatDate(article.publishedOn)}</span>
          <h1>{article.title}</h1>
          {article.excerpt ? <p className="article-excerpt">{article.excerpt}</p> : null}
        </div>
      </section>

      <section className="article-body">
        <div className="wrap">
          <MarkdownBody content={article.body} />
        </div>
      </section>

      <section className="article-cta">
        <div className="wrap">
          <h2>Let&rsquo;s Talk</h2>
          <p>
            If you&rsquo;re ready to modernize your sales engine, digitize your operations, or
            co-found the next tool for your industry — KB&amp;G® is your partner.
          </p>
          <div className="article-cta-actions">
            <a className="btn btn-primary" href="https://kbngconsulting.com/contacts">
              Book a Call
            </a>
            <a className="btn btn-ghost" href="https://kbngconsulting.com/consulting-services">
              See Our Work
            </a>
          </div>
          <p className="article-cta-contact">
            Contact us · <a href="mailto:julia@kbngconsulting.com">julia@kbngconsulting.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
