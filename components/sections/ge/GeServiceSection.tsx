import type { CSSProperties } from "react";
import Image from "next/image";
import type { GeServiceSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { parseStringList } from "@/components/sections/cw/shared";
import { GeOfferCard } from "@/components/sections/ge/GeOfferCard";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Omit<GeServiceSectionData, "__component">;

const THEME_VARS: Record<NonNullable<GeServiceSectionData["themeTone"]>, Record<string, string>> = {
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
  blue: {
    "--t": "#7aa7d9",
    "--t-dim": "rgba(122,167,217,.5)",
    "--t-faint": "rgba(122,167,217,.12)",
  },
};

export function GeServiceSection({
  sectionConfig,
  themeTone = "mint",
  altBackground,
  kicker,
  heading,
  promise,
  pills,
  image,
  imageUrl,
  imageAlt,
  offers,
}: Props) {
  const pillList = parseStringList(pills);
  const themeVars = THEME_VARS[themeTone] ?? THEME_VARS.mint;
  const src = extractStrapiImageUrl(image || imageUrl);

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
          {src ? (
            <div className="visual reveal photo">
              <Image
                src={src}
                alt={imageAlt || heading}
                fill
                sizes="(min-width: 860px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : null}
        </div>

        {offers?.length ? (
          <div className="offers">
            {offers.map((offer) => (
              <GeOfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
