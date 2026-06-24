import type { HeroSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type HeroSectionProps = Omit<HeroSectionData, "__component">;

export function HeroSection({
  heading,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroSectionProps) {
  return (
    <section className="hero">
      <Container>
        <h1 className="reveal">{heading}</h1>
        {subtitle ? <p className="reveal">{subtitle}</p> : null}
        <div className="hero-actions reveal">
          {primaryCtaText ? <Button href={primaryCtaHref || "#book"}>{primaryCtaText}</Button> : null}
          {secondaryCtaText ? (
            <Button href={secondaryCtaHref || "#solutions"} variant="ghost">
              {secondaryCtaText}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
