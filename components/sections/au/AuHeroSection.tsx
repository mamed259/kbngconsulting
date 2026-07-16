import Link from "next/link";
import type { AuHeroSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuHeroSectionData, "__component">;

export function AuHeroSection({ heading, headingHighlight, lead, primaryCtaText, primaryCtaHref }: Props) {
  return (
    <section className="hero">
      <Container>
        <h1 className="reveal">
          {heading}
          {headingHighlight ? (
            <>
              {" "}
              <span className="hl">{headingHighlight}</span>
            </>
          ) : null}
        </h1>
        {lead ? <p className="lead reveal">{lead}</p> : null}
        {primaryCtaText && primaryCtaHref ? (
          <Link className="btn btn-primary reveal" href={primaryCtaHref}>
            {primaryCtaText}
          </Link>
        ) : null}
      </Container>
    </section>
  );
}
