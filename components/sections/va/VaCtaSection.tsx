import Link from "next/link";
import type { VaCtaSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<VaCtaSectionData, "__component">;

export function VaCtaSection({
  heading,
  body,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  return (
    <section className="cta">
      <Container>
        <h2 className="reveal">{heading}</h2>
        {body ? <p className="reveal">{body}</p> : null}
        {(primaryCtaText || secondaryCtaText) && (
          <div className="cta-row reveal">
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
      </Container>
    </section>
  );
}
