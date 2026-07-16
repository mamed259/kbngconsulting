import type { CwIssuesSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { CwWaveformIcon } from "@/components/canary-waves/CwIcons";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";
import { parseStringList } from "@/components/sections/cw/shared";

type Props = Omit<CwIssuesSectionData, "__component">;

export function CwIssuesSection({ sectionConfig, kicker, heading, promise, cards }: Props) {
  if (!cards?.length) return null;

  return (
    <section
      id={sectionConfig?.sectionId || "issues"}
      className="service"
      style={cwThemeStyle(cwThemes.yellow)}
    >
      <Container>
        <div className="service-head">
          <div className="text" style={{ flex: "1 1 auto", maxWidth: "74ch" }}>
            {kicker ? (
              <p className="kicker reveal">
                <span className="flag" />
                {kicker}
              </p>
            ) : null}
            <h2 className="reveal">{heading}</h2>
            {promise ? (
              <p className="promise reveal" style={{ maxWidth: "74ch" }}>
                {promise}
              </p>
            ) : null}
          </div>
        </div>
        <div className="offers">
          {cards.map((card) => {
            const theme = card.accentTheme === "coral" ? cwThemes.coral : cwThemes.yellow;
            const bullets = parseStringList(card.bullets);

            return (
              <article key={card.id} className="ocard reveal" style={cwThemeStyle(theme)}>
                <h3>{card.title}</h3>
                {card.quote ? (
                  <p className="quote-line">
                    <CwWaveformIcon color="var(--t)" />
                    <span>{card.quote}</span>
                  </p>
                ) : null}
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
                    <b>For</b>
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
