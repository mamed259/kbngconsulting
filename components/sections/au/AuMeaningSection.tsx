import type { AuMeaningSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuMeaningSectionData, "__component">;

export function AuMeaningSection({ heading, title, body }: Props) {
  const paragraphs = body.split("\n").filter(Boolean);

  return (
    <section className="au-meaning">
      <Container>
        <div className="au-meaning-inner">
          {heading ? (
            <div className="kicker reveal" style={{ ["--t" as string]: "var(--coral)" }}>
              <span className="flag coral" aria-hidden="true" />
              {heading}
            </div>
          ) : null}
          <h2 className="au-meaning-title reveal">{title}</h2>
          <div className="au-meaning-body">
            {paragraphs.map((paragraph, index) => (
              <p className="reveal" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
