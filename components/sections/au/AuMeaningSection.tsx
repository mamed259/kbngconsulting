import type { AuMeaningSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<AuMeaningSectionData, "__component">;

export function AuMeaningSection({ heading, title, body }: Props) {
  const paragraphs = body.split("\n").filter(Boolean);

  return (
    <section className="meaning">
      <Container>
        <span className="kicker reveal">{heading}</span>
        <h2 className="meaning-title reveal">{title}</h2>
        <div className="meaning-body">
          {paragraphs.map((paragraph, index) => (
            <p className="reveal" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
