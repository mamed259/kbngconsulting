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
    <section className="au-cta" id="book">
      <Container>
        <div className="au-cta-card reveal">
          <div className="flag-row" aria-hidden="true">
            <span className="flag mint" />
            <span className="flag yellow" />
            <span className="flag coral" />
          </div>
          <h2>{heading}</h2>
          {body ? <p>{body}</p> : null}
          {(primaryCtaText || secondaryCtaText) && (
            <div className="au-cta-actions">
              {primaryCtaText && primaryCtaHref ? (
                <a className="au-btn au-btn-solid" href={primaryCtaHref} data-contact-trigger>
                  {primaryCtaText}
                </a>
              ) : null}
              {secondaryCtaText && secondaryCtaHref ? (
                <Link className="au-btn au-btn-ghost" href={secondaryCtaHref}>
                  {secondaryCtaText}
                </Link>
              ) : null}
            </div>
          )}
          {contactEmail ? (
            <div className="au-cta-contact">
              {contactLabel ? <span className="au-contact-label">{contactLabel}</span> : null}
              <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
