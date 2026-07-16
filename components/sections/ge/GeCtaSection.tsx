import Link from "next/link";
import type { GeCtaSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<GeCtaSectionData, "__component">;

export function GeCtaSection({
  sectionConfig,
  heading,
  body,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  return (
    <section id={sectionConfig?.sectionId || undefined} className="cta">
      <Container>
        <h2 className="reveal">{heading}</h2>
        {body ? <p className="reveal">{body}</p> : null}
        {(primaryCtaText || secondaryCtaText) && (
          <div className="cta-row reveal">
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
      </Container>
    </section>
  );
}
