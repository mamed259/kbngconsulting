import Link from "next/link";
import type { ResourceCardData, ResourcesSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";
import { getArticles } from "@/lib/api";
import { fallbackArticles } from "@/content/blog-fallback";
import { mergeArticles } from "@/lib/articles";

type ResourcesSectionProps = Omit<ResourcesSectionData, "__component">;

export async function ResourcesSection({ heading, cards }: ResourcesSectionProps) {
  const articles = await getArticles();
  const list = mergeArticles(articles, fallbackArticles).slice(0, 3);

  const items =
    list.length > 0
      ? list.map((article, index) => ({
          id: article.id ?? index,
          title: article.title,
          excerpt: article.excerpt || "",
          tag: "KB&G · BLOG",
          href: `/blog/articles/${article.slug}`,
          imageUrl: extractStrapiImageUrl(article.coverImage || article.coverImageUrl),
        }))
      : cards.map((card: ResourceCardData, index) => ({
          id: card.id ?? index,
          title: card.title,
          excerpt: card.excerpt || "",
          tag: card.tag || "KB&G - CONSULTING",
          href: card.href || "/blog",
          imageUrl: extractStrapiImageUrl(card.image || card.imageUrl),
        }));

  return (
    <section id="resources">
      <Container>
        <div className="res-head reveal">
          <h2>{heading}</h2>
          <p>
            Guides, case studies, and practical resources on industrial innovation, safety, pricing,
            and digital transformation.
          </p>
          <div className="res-links">
            <Link href="/blog">View all blogs &rarr;</Link>
            <Link href="/founder-diagnostic">Founder Diagnostic &rarr;</Link>
          </div>
        </div>

        <div className="rgrid">
          {items.map((item) => (
            <Link className="res reveal" href={item.href} key={item.id}>
              <figure>
                <div
                  className="thumb"
                  style={
                    item.imageUrl
                      ? {
                          backgroundImage: `url("${item.imageUrl}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  <span className="tag">
                    <span className="flag" />
                    {item.tag}
                  </span>
                  <h3>{item.title}</h3>
                </div>
                {item.excerpt ? <figcaption>{item.excerpt}</figcaption> : null}
              </figure>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
