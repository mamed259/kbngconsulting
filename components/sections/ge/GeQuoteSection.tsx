import type { GeQuoteSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<GeQuoteSectionData, "__component">;

export function GeQuoteSection({ sectionConfig, body }: Props) {
  return (
    <section id={sectionConfig?.sectionId || undefined}>
      <Container>
        <div className="quote-band reveal">
          <div className="quote-wrap">
            <span className="qmark" aria-hidden="true">
              &ldquo;
            </span>
            <p>{body}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
