import type { AuHeroSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuHeroSectionData, "__component">;

export function AuHeroSection({ heading, headingHighlight, lead, primaryCtaText, primaryCtaHref }: Props) {
  return (
    <section className="au-hero">
      <Container>
        <div className="au-hero-row">
          <div>
            <h1 className="reveal">
              {heading}
              {headingHighlight ? (
                <>
                  {" "}
                  <span className="hl">{headingHighlight}</span>
                </>
              ) : null}
            </h1>
            {lead ? <p className="au-hero-lead reveal">{lead}</p> : null}
            {primaryCtaText && primaryCtaHref ? (
              <div className="au-hero-cta reveal">
                <a className="au-btn au-btn-solid" href={primaryCtaHref} data-contact-trigger>
                  {primaryCtaText}
                </a>
              </div>
            ) : null}
          </div>
          <div className="flag-row reveal" aria-hidden="true">
            <span className="flag mint" />
            <span className="flag yellow" />
            <span className="flag coral" />
          </div>
        </div>
      </Container>
    </section>
  );
}
