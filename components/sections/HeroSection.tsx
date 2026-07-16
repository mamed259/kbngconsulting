import Image from "next/image";
import type { HeroSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { extractStrapiImageUrl } from "@/lib/utils";

type HeroSectionProps = Omit<HeroSectionData, "__component">;

const heroHighlight = "real-world systems that elevate your teams";

function renderSubtitle(subtitle: string) {
  const index = subtitle.toLowerCase().indexOf(heroHighlight);
  if (index === -1) return subtitle;

  const before = subtitle.slice(0, index);
  const match = subtitle.slice(index, index + heroHighlight.length);
  const after = subtitle.slice(index + heroHighlight.length);

  return (
    <>
      {before}
      <mark>{match}</mark>
      {after}
    </>
  );
}

export function HeroSection({
  heading,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  image,
  imageUrl,
}: HeroSectionProps) {
  const heroImageUrl = extractStrapiImageUrl(image || imageUrl);

  return (
    <section className="hero">
      <Container>
        <h1 className="reveal">{heading}</h1>
        {subtitle ? <p className="reveal">{renderSubtitle(subtitle)}</p> : null}
        <div className="hero-actions reveal">
          {primaryCtaText ? <Button href={primaryCtaHref || "#book"}>{primaryCtaText}</Button> : null}
          {secondaryCtaText ? (
            <Button href={secondaryCtaHref || "#solutions"} variant="ghost">
              {secondaryCtaText}
            </Button>
          ) : null}
        </div>
      </Container>
      {heroImageUrl ? (
        <div className="hero-visual" aria-hidden>
          <Image
            className="hero-visual-img"
            src={heroImageUrl}
            alt=""
            width={500}
            height={500}
            sizes="(min-width: 1100px) 38vw, 0px"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : null}
    </section>
  );
}
