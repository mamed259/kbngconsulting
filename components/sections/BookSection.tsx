import type { BookSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";

type BookSectionProps = Omit<BookSectionData, "__component">;

export function BookSection({ heading, subtitle, ctaText, ctaHref, showForm, formFields }: BookSectionProps) {
  const hasForm = Boolean(showForm && formFields?.length);
  // Avoid a redundant self-link when the form is already on this section
  const showCta = Boolean(ctaText && ctaHref && ctaHref !== "#book" && !hasForm);

  return (
    <section id="book">
      <Container>
        <h2 className="reveal">{heading}</h2>
        {subtitle ? <p className="reveal">{subtitle}</p> : null}
        {showCta ? (
          <div className="reveal">
            <Button href={ctaHref || "#book"}>{ctaText}</Button>
          </div>
        ) : null}
        {hasForm ? (
          <div className="book-form reveal">
            <ContactForm fields={formFields!} />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
