import Image from "next/image";
import type { ConsultingCardData, ConsultingSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";

type ConsultingSectionProps = Omit<ConsultingSectionData, "__component">;

const consultingCardTags: Record<string, string[]> = {
  "Pricing for Heavy Industry": ["Cost and mix calculators", "Pricing maturity"],
  "Commercial Performance": ["Diagnostic", "Scorecards and attractiveness", "Sales training"],
  "AI for Safety and Operations": ["PPE and hazard detection", "Comms intelligence", "Site-tuned models"],
  "Soft Skill Development": ["Safety communication", "Leadership and feedback", "Wellbeing"],
};

function getCardTags(card: ConsultingCardData): string[] {
  if (Array.isArray(card.tags) && card.tags.length > 0) {
    return card.tags;
  }
  return consultingCardTags[card.title] ?? [];
}

export function ConsultingSection({ heading, cards }: ConsultingSectionProps) {
  return (
    <section id="consulting">
      <Container>
        <div className="sectors-head cons-head reveal">
          <div>
            <h2>{heading}</h2>
            <p>Actionable strategy that moves with your operation</p>
          </div>
          <div className="flag-row">
            <span className="flag yellow" />
            <span className="flag coral" />
            <span className="flag mint" />
          </div>
        </div>
        <p className="services-intro reveal">
          We advise where it counts across pricing, commercial performance, safety and people, then
          build the tools and training that put it to work on the ground.
        </p>
        <div className="scards">
          {cards.map((card) => {
            const imageUrl = extractStrapiImageUrl(card.image || card.imageUrl);
            const tags = getCardTags(card);
            return (
              <article key={card.id} className="scard acc-mint reveal">
                {imageUrl ? (
                  <Image
                    className="svc-ico"
                    src={imageUrl}
                    alt=""
                    aria-hidden
                    width={84}
                    height={84}
                  />
                ) : null}
                <h3>{card.title}</h3>
                {card.body ? <p>{card.body}</p> : null}
                {tags.length ? (
                  <div className="pills">
                    {tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                <div className="card-foot">
                  <a className="card-arrow" href={card.href || "#book"} aria-label="Find out more">
                    &rarr;
                  </a>
                </div>
              </article>
            );
          })}
          <article className="scard goal reveal">
            <span className="mark">&ldquo;</span>
            <p>We don&apos;t stop at strategy. We build what comes next. Keep building and growing.</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
