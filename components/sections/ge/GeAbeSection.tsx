import type { GeAbeSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<GeAbeSectionData, "__component">;

export function GeAbeSection({ sectionConfig, heading, lead, steps }: Props) {
  return (
    <section id={sectionConfig?.sectionId || undefined} className="abe">
      <Container>
        <div className="head reveal">
          <h2>{heading}</h2>
          <div className="flag-row">
            <span className="flag mint" />
            <span className="flag yellow" />
            <span className="flag coral" />
          </div>
        </div>
        {lead ? <p className="sub reveal">{lead}</p> : null}
        {steps?.length ? (
          <div className="steps">
            {steps.map((step) => (
              <div className="step reveal" key={step.id}>
                <span className="k">{step.number}</span>
                <h3>{step.title}</h3>
                {step.body ? <p>{step.body}</p> : null}
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
