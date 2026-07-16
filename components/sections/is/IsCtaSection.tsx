import Link from "next/link";
import type { IsCtaSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<IsCtaSectionData, "__component">;

export function IsCtaSection({
  body,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: Props) {
  return (
    <section className="final">
      <Container>
        <p className="lead" style={{ marginTop: 0 }}>
          {body}
        </p>
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
      </Container>
    </section>
  );
}
