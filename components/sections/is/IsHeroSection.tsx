import Image from "next/image";
import Link from "next/link";
import type { IsHeroSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Omit<IsHeroSectionData, "__component">;

export function IsHeroSection({
  heading,
  headingHighlight,
  lead,
  trustLabel,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  image,
  imageUrl,
  imageAlt,
}: Props) {
  const src = extractStrapiImageUrl(image || imageUrl);

  return (
    <section className="hero">
      <Container>
        <div className="hero-copy">
          <h1>
            {heading}
            {headingHighlight ? (
              <>
                {" "}
                <span className="hl">{headingHighlight}</span>
              </>
            ) : null}
          </h1>
          {lead ? <p className="lead">{lead}</p> : null}
          {(primaryCtaText || secondaryCtaText) && (
            <div className="hero-actions">
              {primaryCtaText && primaryCtaHref ? (
                <Link className="btn btn-primary" href={primaryCtaHref}>
                  {primaryCtaText}
                </Link>
              ) : null}
              {secondaryCtaText && secondaryCtaHref ? (
                <Link className="btn btn-ghost" href={secondaryCtaHref}>
                  {secondaryCtaText}
                </Link>
              ) : null}
            </div>
          )}
          {trustLabel ? (
            <div className="trust">
              <span className="t-label">{trustLabel}</span>
            </div>
          ) : null}
        </div>
        {src ? (
          <div className="hero-visual">
            <Image src={src} alt={imageAlt || ""} width={720} height={720} priority sizes="(min-width: 900px) 40vw, 100vw" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
