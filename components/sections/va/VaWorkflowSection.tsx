import type { VaWorkflowSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";

type Props = Omit<VaWorkflowSectionData, "__component">;

export function VaWorkflowSection({ heading, subtitle, steps }: Props) {
  if (!steps?.length) return null;

  return (
    <section className="service alt abe" style={cwThemeStyle(cwThemes.yellow)}>
      <Container>
        <div className="head reveal">
          <span className="flag" />
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
