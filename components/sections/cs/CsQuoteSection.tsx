import type { CsQuoteSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<CsQuoteSectionData, "__component">;

export function CsQuoteSection({ body }: Props) {
  return (
    <section>
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
