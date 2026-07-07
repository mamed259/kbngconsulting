import type { BookSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";

type BookSectionProps = Omit<BookSectionData, "__component">;

export function BookSection({ heading, subtitle, ctaText, ctaHref, showForm, formFields }: BookSectionProps) {
  return (
    <section id="book">
      <Container>
        <h2 className="reveal">{heading}</h2>
        {subtitle ? <p className="reveal">{subtitle}</p> : null}
        {ctaText ? (
          <div className="reveal">
            <Button href={ctaHref || "#book"}>{ctaText}</Button>
          </div>
        ) : null}
        {showForm && formFields?.length ? (
          <div style={{ marginTop: "28px" }}>
            <ContactForm fields={formFields} />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
