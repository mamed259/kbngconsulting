import type { CwAdoptSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";

type Props = Omit<CwAdoptSectionData, "__component">;

export function CwAdoptSection({ kicker, heading, promise, footnote, cards }: Props) {
  return (
    <section className="service alt" style={cwThemeStyle(cwThemes.blue)}>
      <Container>
        <div className="service-head">
          <div className="text" style={{ flex: "1 1 auto", maxWidth: "72ch" }}>
            {kicker ? (
              <p className="kicker reveal">
                <span className="flag" />
                {kicker}
              </p>
            ) : null}
            <h2 className="reveal">{heading}</h2>
            {promise ? (
              <p className="promise reveal" style={{ maxWidth: "72ch" }}>
                {promise}
              </p>
            ) : null}
          </div>
        </div>
        {cards?.length ? (
          <div className="aud">
            {cards.map((card) => (
              <div key={card.id} className="acard reveal">
                <h3>{card.title}</h3>
                {card.body ? <p>{card.body}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
        {footnote ? (
          <p className="promise reveal" style={{ marginTop: "24px" }}>
            {footnote}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
