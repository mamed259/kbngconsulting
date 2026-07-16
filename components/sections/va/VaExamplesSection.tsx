import type { VaExamplesSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";
import { parseStringList } from "@/components/sections/cw/shared";

type Props = Omit<VaExamplesSectionData, "__component">;

const themeMap = {
  coral: cwThemes.coral,
  yellow: cwThemes.yellow,
  blue: cwThemes.blue,
  mint: cwThemes.mint,
} as const;

export function VaExamplesSection({
  sectionConfig,
  kicker,
  heading,
  promise,
  cards,
}: Props) {
  if (!cards?.length) return null;

  return (
    <section
      id={sectionConfig?.sectionId || "examples"}
      className="service"
      style={cwThemeStyle(cwThemes.mint)}
    >
      <Container>
        <div className="service-head">
          <div className="text" style={{ flex: "1 1 auto", maxWidth: "80ch" }}>
            {kicker ? (
              <p className="kicker reveal">
                <span className="flag" />
                {kicker}
              </p>
            ) : null}
            <h2 className="reveal">{heading}</h2>
            {promise ? (
              <p className="promise reveal" style={{ maxWidth: "80ch" }}>
                {promise}
              </p>
            ) : null}
          </div>
        </div>
        <div className="offers">
          {cards.map((card) => {
            const theme = themeMap[card.accentTheme || "mint"] || cwThemes.mint;
            const bullets = parseStringList(card.bullets);
            return (
              <article key={card.id} className="ocard reveal" style={cwThemeStyle(theme)}>
                <h3>{card.title}</h3>
                {card.body ? <p className="what">{card.body}</p> : null}
                {bullets.length ? (
                  <ul className="plist">
                    {bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {card.forLabel ? (
                  <p className="for">
                    <b>Fits</b>
                    {card.forLabel}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
