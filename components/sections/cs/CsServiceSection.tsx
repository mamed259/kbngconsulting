import type { CSSProperties } from "react";
import type { CsServiceSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { parseStringList } from "@/components/sections/cw/shared";
import { CsServiceVisual } from "@/components/sections/cs/CsServiceVisual";
import { CsOfferCard } from "@/components/sections/cs/CsOfferCard";

type Props = Omit<CsServiceSectionData, "__component">;

const THEME_VARS: Record<
  NonNullable<CsServiceSectionData["themeTone"]>,
  Record<string, string>
> = {
  mint: {
    "--t": "#68FFCF",
    "--t-dim": "rgba(104,255,207,.42)",
    "--t-faint": "rgba(104,255,207,.10)",
  },
  yellow: {
    "--t": "#FFF275",
    "--t-dim": "rgba(255,242,117,.42)",
    "--t-faint": "rgba(255,242,117,.10)",
  },
  pink: {
    "--t": "#FF5A75",
    "--t-dim": "rgba(255,90,117,.42)",
    "--t-faint": "rgba(255,90,117,.10)",
  },
  slate: {
    "--t": "#9db2cf",
    "--t-dim": "rgba(157,178,207,.5)",
    "--t-faint": "rgba(157,178,207,.12)",
  },
};

export function CsServiceSection({
  sectionConfig,
  themeTone = "mint",
  altBackground,
  kicker,
  heading,
  promise,
  pills,
  visualKind = "pricing",
  image,
  imageUrl,
  imageAlt,
  offers,
}: Props) {
  const pillList = parseStringList(pills);
  const themeVars = THEME_VARS[themeTone] ?? THEME_VARS.mint;

  return (
    <section
      id={sectionConfig?.sectionId || undefined}
      className={`service${altBackground ? " alt" : ""}`}
      style={themeVars as CSSProperties}
    >
      <Container>
        <div className="service-head">
          <div className="text">
            {kicker ? (
              <p className="kicker reveal">
                <span className="flag" />
                {kicker}
              </p>
            ) : null}
            <h2 className="reveal">{heading}</h2>
            {promise ? <p className="promise reveal">{promise}</p> : null}
            {pillList.length ? (
              <div className="pills reveal">
                {pillList.map((pill) => (
                  <span className="pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <div className={`visual reveal${visualKind === "image" ? " photo" : ""}`}>
            <CsServiceVisual
              visualKind={visualKind}
              heading={heading}
              image={image}
              imageUrl={imageUrl}
              imageAlt={imageAlt}
            />
          </div>
        </div>

        {offers?.length ? (
          <div className="offers">
            {offers.map((offer) => (
              <CsOfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
