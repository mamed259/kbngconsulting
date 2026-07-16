import type { VaQuoteSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<VaQuoteSectionData, "__component">;

export function VaQuoteSection({ text, attr }: Props) {
  return (
    <section>
      <Container>
        <div className="quote-band reveal">
          <div className="quote-wrap">
            <span className="qmark">&ldquo;</span>
            <div>
              <p>{text}</p>
              {attr ? <p className="attr">{attr}</p> : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
