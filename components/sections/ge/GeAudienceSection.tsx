import type { CSSProperties } from "react";
import type { GeAudienceSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<GeAudienceSectionData, "__component">;

const THEME_VARS = {
  "--t": "#7aa7d9",
  "--t-dim": "rgba(122,167,217,.5)",
  "--t-faint": "rgba(122,167,217,.12)",
} as CSSProperties;

export function GeAudienceSection({ sectionConfig, heading, promise, cards }: Props) {
  return (
    <section id={sectionConfig?.sectionId || undefined} className="service" style={THEME_VARS}>
      <Container>
        <div className="audience-head reveal">
          <h2>{heading}</h2>
          <div className="flag-row">
            <span className="flag mint" />
            <span className="flag yellow" />
            <span className="flag coral" />
          </div>
        </div>
        {promise ? <p className="audience-sub reveal">{promise}</p> : null}
        {cards?.length ? (
          <div className="aud">
            {cards.map((card) => (
              <div className="acard reveal" key={card.id}>
                <h3>{card.title}</h3>
                {card.body ? <p>{card.body}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
