import type { CwWorkflowSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<CwWorkflowSectionData, "__component">;

export function CwWorkflowSection({ sectionConfig, heading, subtitle, steps }: Props) {
  if (!steps?.length) return null;

  return (
    <section id={sectionConfig?.sectionId || "workflow"} className="abe">
      <Container>
        <div className="head reveal">
          <span className="flag mint" />
          <h2>{heading}</h2>
        </div>
        {subtitle ? <p className="sub reveal">{subtitle}</p> : null}
        <div className="steps">
          {steps.map((step) => (
            <div key={step.id} className="step reveal">
              <div className="k">{step.num}</div>
              <h3>{step.title}</h3>
              {step.body ? <p>{step.body}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
