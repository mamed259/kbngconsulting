import type { VaAudienceSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";

type Props = Omit<VaAudienceSectionData, "__component">;

export function VaAudienceSection({ kicker, heading, cards }: Props) {
  if (!cards?.length) return null;

  return (
    <section className="service" style={cwThemeStyle(cwThemes.mint)}>
      <Container>
        <div className="service-head">
          <div className="text" style={{ flex: "1 1 auto", maxWidth: "78ch" }}>
            {kicker ? (
              <p className="kicker reveal">
                <span className="flag" />
                {kicker}
              </p>
            ) : null}
            <h2 className="reveal">{heading}</h2>
          </div>
        </div>
        <div className="aud">
          {cards.map((card) => (
            <div key={card.id} className="acard reveal">
              <h3>{card.title}</h3>
              {card.body ? <p>{card.body}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
