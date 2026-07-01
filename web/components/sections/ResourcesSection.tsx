import type { ResourcesSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type ResourcesSectionProps = Omit<ResourcesSectionData, "__component">;

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
          {cards.map((card) => (
            <a className="res reveal" key={card.id} href={card.href || "#"} target="_blank" rel="noreferrer">
              <figure>
                <div className="thumb">
                  {card.tag ? (
                    <span className="tag">
                      <span className="flag" />
                      {card.tag}
                    </span>
                  ) : null}
                  <h3>{card.title}</h3>
                </div>
                {card.excerpt ? <figcaption>{card.excerpt}</figcaption> : null}
              </figure>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
