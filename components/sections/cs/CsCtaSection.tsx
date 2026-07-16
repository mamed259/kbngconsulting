import Link from "next/link";
import type { CsCtaSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<CsCtaSectionData, "__component">;

export function CsCtaSection({ heading, body, ctaText, ctaHref }: Props) {
  return (
    <section className="cta">
      <Container>
        <h2 className="reveal">{heading}</h2>
        {body ? <p className="reveal">{body}</p> : null}
        {ctaText && ctaHref ? (
          <Link className="lets-talk reveal" href={ctaHref}>
            {ctaText}
          </Link>
        ) : null}
      </Container>
    </section>
  );
}
