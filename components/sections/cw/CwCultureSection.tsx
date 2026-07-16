import Image from "next/image";
import type { CwCultureSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";
import { CwCultureIcon } from "@/components/sections/cw/shared";

type Props = Omit<CwCultureSectionData, "__component">;

export function CwCultureSection({ kicker, heading, promise, cards }: Props) {
  if (!cards?.length) return null;

  return (
    <section className="service alt" style={cwThemeStyle(cwThemes.mint)}>
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
        <div className="ccards">
          {cards.map((card) => {
            const src = extractStrapiImageUrl(card.image || card.imageUrl);

            return (
              <article key={card.id} className="ccard reveal">
                {src ? (
                  <Image src={src} alt={card.imageAlt || ""} width={640} height={360} />
                ) : null}
                <div className="cc-in">
                  <div className="cc-head">
                    <span className="cc-ico">
                      <CwCultureIcon type={card.icon || "radio"} />
                    </span>
                    <h3>{card.title}</h3>
                  </div>
                  {card.body ? <p>{card.body}</p> : null}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
