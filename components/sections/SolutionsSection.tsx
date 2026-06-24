import type { SolutionsSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type SolutionsSectionProps = Omit<SolutionsSectionData, "__component">;

function accentClass(theme?: string) {
  switch (theme) {
    case "green":
      return "acc-mint";
    case "coral":
      return "acc-coral";
    case "slate":
      return "acc-slate";
    default:
      return "acc-yellow";
  }
}

export function SolutionsSection({ heading, intro, cards }: SolutionsSectionProps) {
  const featured = cards.slice(0, 2);
  const secondary = cards.slice(2);

  return (
    <section id="solutions">
      <Container>
        <h2 className="reveal" style={{ fontSize: "clamp(1.9rem,4.6vw,3rem)", lineHeight: 1.12 }}>
          {heading}
        </h2>
        {intro ? <p className="secnote reveal">{intro}</p> : null}

        <div className="products flagships">
          {featured.map((card) => (
            <article key={card.id} className="flagship reveal">
              <div className="body">
                <h3>{card.title}</h3>
                {card.body ? <p>{card.body}</p> : null}
                {card.href ? <Button href={card.href}>Book a demo</Button> : null}
              </div>
              <div className={`media ${accentClass(card.accentTheme)}`} />
            </article>
          ))}
        </div>

        {secondary.length ? (
          <>
            <h3 className="reveal" style={{ fontSize: "1.4rem", margin: "8px 0 10px", color: "var(--yellow)" }}>
              More from the Innovation Studio
            </h3>
            <div className="bento">
              {secondary.map((card, index) => {
                const variant = index === 0 ? "vision" : index === 1 ? "market" : "cpq";
                return (
                  <article key={card.id} className={`tile photo ${variant} reveal`}>
                    <div className="tile-img" />
                    <div className="tile-body">
                      <span className="tile-tag">Studio</span>
                      <h3>{card.title}</h3>
                      {card.body ? <p>{card.body}</p> : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        ) : null}
      </Container>
    </section>
  );
}
