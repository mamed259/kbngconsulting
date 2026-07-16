import Image from "next/image";
import Link from "next/link";
import type { VaHeroSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Omit<VaHeroSectionData, "__component">;

export function VaHeroSection({
  heading,
  subtitle,
  lead,
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
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="reveal">{heading}</h1>
            {subtitle ? (
              <p className="sub reveal" style={{ color: "var(--white)", fontWeight: 600 }}>
                {subtitle}
              </p>
            ) : null}
            {lead ? <p className="lead reveal">{lead}</p> : null}
            {(primaryCtaText || secondaryCtaText) && (
              <div className="hero-cta reveal">
                {primaryCtaText && primaryCtaHref ? (
                  <Link className="btn btn-solid" href={primaryCtaHref}>
                    {primaryCtaText}
                  </Link>
                ) : null}
                {secondaryCtaText && secondaryCtaHref ? (
                  <Link className="va-btn-ghost" href={secondaryCtaHref}>
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
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
