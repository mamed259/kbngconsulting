import Image from "next/image";
import Link from "next/link";
import type { IsProductCardData, IsProductsSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";
import { parseStringList } from "@/components/sections/cw/shared";

type Props = Omit<IsProductsSectionData, "__component">;

function kickerClass(tone?: IsProductCardData["kickerTone"]) {
  if (tone === "yellow") return "kick fy";
  if (tone === "pink") return "kick fp";
  return "kick";
}

function ProductCard({ card }: { card: IsProductCardData }) {
  const src = extractStrapiImageUrl(card.image || card.imageUrl);
  const features = parseStringList(card.features);
  const className = card.flip ? "pcard flip reveal" : "pcard reveal";

  return (
    <article className={className} id={card.anchorId || undefined}>
      {src ? (
        <div className="media">
          <Image
            src={src}
            alt={card.imageAlt || ""}
            fill
            sizes="(min-width: 900px) 420px, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : null}
      <div className="info">
        {card.kicker ? <span className={kickerClass(card.kickerTone)}>{card.kicker}</span> : null}
        <div className="phead">
          <h3>{card.title}</h3>
          {card.subtitle ? <span className="sub">{card.subtitle}</span> : null}
        </div>
        {card.body ? <p className="desc">{card.body}</p> : null}
        {card.statValue ? (
          <div className="stat">
            <span className="big">{card.statValue}</span>
            {card.statLabel ? <span className="lbl">{card.statLabel}</span> : null}
          </div>
        ) : null}
        {features.length ? (
          <ul className="feat">
            {features.map((item) => {
              const colon = item.indexOf(":");
              if (colon > 0 && colon < 40) {
                return (
                  <li key={item}>
                    <b>{item.slice(0, colon + 1)}</b>
                    {item.slice(colon + 1)}
                  </li>
                );
              }
              return <li key={item}>{item}</li>;
            })}
          </ul>
        ) : null}
        {card.whoFor ? (
          <div className="who">
            <b>Who it&apos;s for:</b> {card.whoFor}
          </div>
        ) : null}
        {(card.primaryCtaText || card.secondaryCtaText) && (
          <div className="cta-row">
            {card.primaryCtaText && card.primaryCtaHref ? (
              <Link
                className={features.length ? "btn btn-soft btn-sm" : "btn btn-soft"}
                href={card.primaryCtaHref}
              >
                {card.primaryCtaText}
              </Link>
            ) : null}
            {card.secondaryCtaText && card.secondaryCtaHref ? (
              <Link className="link-mint" href={card.secondaryCtaHref}>
                {card.secondaryCtaText}
              </Link>
            ) : null}
          </div>
        )}
        {card.proof ? <p className="proof">{card.proof}</p> : null}
      </div>
    </article>
  );
}

export function IsProductsSection({
  sectionConfig,
  spineYear,
  spineLabel,
  heading,
  lead,
  cards,
}: Props) {
  if (!cards?.length) return null;

  return (
    <section id={sectionConfig?.sectionId || undefined}>
      <Container>
        {(spineYear || spineLabel) && (
          <div className="spine">
            <span className="dot" />
            <span className="yr">
              {spineYear}
              {spineLabel ? <small>{spineLabel}</small> : null}
            </span>
            <span className="rule" />
          </div>
        )}
        <div className="sec-head" style={{ marginBottom: "2rem" }}>
          <h2>{heading}</h2>
          {lead ? <p className="lead">{lead}</p> : null}
        </div>
        {cards.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </Container>
    </section>
  );
}
