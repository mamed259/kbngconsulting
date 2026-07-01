import type { ConsultingSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type ConsultingSectionProps = Omit<ConsultingSectionData, "__component">;

export function ConsultingSection({ heading, cards }: ConsultingSectionProps) {
  return (
    <section id="consulting">
      <Container>
        <div className="services-head reveal">
          <h2>{heading}</h2>
        </div>
        <p className="services-intro reveal">
          We advise where it counts across pricing, commercial performance, safety and people, then
          build tools and training that put it to work on the ground.
        </p>
        <div className="scards">
          {cards.map((card, index) => (
            <article key={card.id} className="scard acc-mint reveal">
              <span className="snum">{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              {card.body ? <p>{card.body}</p> : null}
              <div className="card-foot">
                <a className="card-arrow" href={card.href || "#book"} aria-label="Find out more">
                  &rarr;
                </a>
              </div>
            </article>
          ))}
          <article className="scard goal reveal">
            <span className="mark">&ldquo;</span>
            <p>We do not stop at strategy. We build what comes next.</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
