import type { ResourceCardData, ResourcesSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";

type ResourcesSectionProps = Omit<ResourcesSectionData, "__component">;

const resourceCardDefaults: Array<Pick<ResourceCardData, "title" | "excerpt" | "tag">> = [
  {
    title: "Vision AI for Dummies: From Gold Mines to Luxury Bags",
    excerpt: "Training Vision AI Model",
    tag: "KB&G - CONSULTING",
  },
  {
    title: "The Hidden Cause of Customer Success Burnout",
    excerpt: "Customer Success Burnout",
    tag: "KB&G - CONSULTING",
  },
  {
    title: "Essential Solutions for Safer Mining Operations",
    excerpt: "Mining Safety Equipment",
    tag: "KB&G - CONSULTING",
  },
];

function getResourceCard(card: ResourceCardData, index: number) {
  const defaults = resourceCardDefaults[index];
  return {
    title: card.title || defaults?.title || "",
    excerpt: card.excerpt || defaults?.excerpt || "",
    tag: card.tag || defaults?.tag || "KB&G - CONSULTING",
  };
}

export function ResourcesSection({ heading, cards }: ResourcesSectionProps) {
  return (
    <section id="resources">
      <Container>
        <div className="res-head reveal">
          <h2>{heading}</h2>
          <p>
            Guides, case studies, and practical resources on industrial innovation, safety, pricing,
            and digital transformation.
          </p>
        </div>

        <div className="rgrid">
          {cards.map((card, index) => {
            const imageUrl = extractStrapiImageUrl(card.image || card.imageUrl);
            const content = getResourceCard(card, index);
            return (
              <figure className="res reveal" key={card.id}>
                <div
                  className="thumb"
                  style={
                    imageUrl
                      ? {
                          backgroundImage: `url("${imageUrl}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  <span className="tag">
                    <span className="flag" />
                    {content.tag}
                  </span>
                  <h3>{content.title}</h3>
                </div>
                {content.excerpt ? <figcaption>{content.excerpt}</figcaption> : null}
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
