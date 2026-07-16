import type { VaLensSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";
import { parseStringList } from "@/components/sections/cw/shared";

type Props = Omit<VaLensSectionData, "__component">;

const themeMap = {
  mint: cwThemes.mint,
  slate: {
    t: "#5D6E84",
    tDim: "rgba(93, 110, 132, 0.42)",
    tFaint: "rgba(93, 110, 132, 0.10)",
  },
  yellow: cwThemes.yellow,
  coral: cwThemes.coral,
  blue: cwThemes.blue,
} as const;

export function VaLensSection({ kicker, heading, promise, footnote, cards }: Props) {
  return (
    <section className="service alt" style={cwThemeStyle(cwThemes.blue)}>
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
        {cards?.length ? (
          <div className="aud" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
            {cards.map((card) => {
              const theme = themeMap[card.accentTheme || "mint"] || cwThemes.mint;
              const bullets = parseStringList(card.bullets);
              return (
                <div key={card.id} className="acard reveal" style={cwThemeStyle(theme)}>
                  <h3>{card.title}</h3>
                  {bullets.length ? (
                    <ul className="plist">
                      {bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
        {footnote ? (
          <p className="promise reveal" style={{ marginTop: "24px", maxWidth: "80ch" }}>
            {footnote}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
