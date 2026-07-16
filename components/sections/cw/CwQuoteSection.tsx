import type { CwQuoteSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<CwQuoteSectionData, "__component">;

export function CwQuoteSection({ text, attr, footnote }: Props) {
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
        {footnote ? (
          <p
            className="promise reveal"
            style={{ textAlign: "center", maxWidth: "80ch", margin: "22px auto 0" }}
          >
            {footnote}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
