import Image from "next/image";
import Link from "next/link";
import type { GeHeroSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Omit<GeHeroSectionData, "__component">;

export function GeHeroSection({
  sectionConfig,
  heading,
  subtitle,
  lead,
  leadBold,
  leadAfter,
  image,
  imageUrl,
  imageAlt,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  const src = extractStrapiImageUrl(image || imageUrl);

  return (
    <section id={sectionConfig?.sectionId || undefined} className="hero">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-row">
              <div>
                <h1 className="reveal">{heading}</h1>
                {subtitle ? <p className="sub reveal">{subtitle}</p> : null}
              </div>
              <div className="flag-row reveal">
                <span className="flag mint" />
                <span className="flag yellow" />
                <span className="flag coral" />
              </div>
            </div>
            {lead ? (
              <p className="lead reveal">
                {lead}
                {leadBold ? (
                  <>
                    {" "}
                    <b>{leadBold}</b>
                  </>
                ) : null}
                {leadAfter}
              </p>
            ) : null}
            {(primaryCtaText || secondaryCtaText) && (
              <div className="hero-cta reveal">
                {primaryCtaText && primaryCtaHref ? (
                  <Link className="lets-talk" href={primaryCtaHref}>
                    {primaryCtaText}
                  </Link>
                ) : null}
                {secondaryCtaText && secondaryCtaHref ? (
                  <Link className="btn-ghost" href={secondaryCtaHref}>
                    {secondaryCtaText}
                  </Link>
                ) : null}
              </div>
            )}
          </div>
          {src ? (
            <div className="hero-art reveal">
              <Image
                src={src}
                alt={imageAlt || ""}
                width={960}
                height={720}
                priority
                sizes="(min-width: 920px) 45vw, 100vw"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
