import Image from "next/image";
import type { VaBuildSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";
import { VaBuildIcon } from "@/components/sections/va/VaIcons";

type Props = Omit<VaBuildSectionData, "__component">;

export function VaBuildSection({ kicker, heading, promise, cards }: Props) {
  if (!cards?.length) return null;

  return (
    <section className="service alt" style={cwThemeStyle(cwThemes.coral)}>
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
        <div className="wb-cards">
          {cards.map((card) => {
            const src = extractStrapiImageUrl(card.image || card.imageUrl);
            return (
              <article key={card.id} className="wb-card reveal">
                {src ? (
                  <Image src={src} alt={card.imageAlt || ""} width={640} height={400} />
                ) : null}
                <div className="wb-in">
                  <div className="wb-head">
                    <span className="wb-ico">
                      <VaBuildIcon type={card.icon} />
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
