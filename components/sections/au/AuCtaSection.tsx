import Link from "next/link";
import type { AuCtaSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuCtaSectionData, "__component">;

export function AuCtaSection({
  heading,
  body,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  contactLabel,
  contactEmail,
}: Props) {
  return (
    <section className="cta">
      <Container>
        <h2 className="reveal">{heading}</h2>
        {body ? <p className="reveal">{body}</p> : null}
        {(primaryCtaText || secondaryCtaText) && (
          <div className="cta-actions reveal">
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
        {contactEmail ? (
          <div className="cta-contact reveal">
            {contactLabel ? <span className="contact-label">{contactLabel}</span> : null}
            <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
