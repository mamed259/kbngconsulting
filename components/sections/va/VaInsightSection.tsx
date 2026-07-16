import type { VaInsightSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";

type Props = Omit<VaInsightSectionData, "__component">;

export function VaInsightSection({ kicker, heading, promise }: Props) {
  return (
    <section className="service" style={cwThemeStyle(cwThemes.yellow)}>
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
            {promise ? (
              <p className="promise reveal" style={{ maxWidth: "78ch" }}>
                {promise}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
