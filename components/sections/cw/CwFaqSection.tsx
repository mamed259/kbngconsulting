import type { CwFaqSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<CwFaqSectionData, "__component">;

export function CwFaqSection({ heading, items }: Props) {
  if (!items?.length) return null;

  return (
    <section className="faq">
      <Container>
        <h2 className="reveal">{heading}</h2>
        <div className="faq-list">
          {items.map((item) => (
            <div key={item.id} className="qa reveal">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
