import type { CSSProperties } from "react";
import type { FdHowSectionData } from "@/types/strapi";

type Props = Omit<FdHowSectionData, "__component">;

const STEP_COLORS = ["var(--yellow)", "var(--coral)", "var(--mint)", "var(--yellow)"];

export function FdHow({ sectionConfig, heading, lede, steps = [] }: Props) {
  return (
    <section id={sectionConfig?.sectionId || "how"}>
      <div className="wrap">
        <div className="head reveal">
          <h2>
            {heading}
            <span className="flag-row logo-mark">
              <span className="flag mint" />
              <span className="flag yellow" />
              <span className="flag coral" />
            </span>
          </h2>
          {lede ? <p className="lede">{lede}</p> : null}
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div
              className="step reveal"
              key={step.id ?? step.title}
              style={{ "--sn": STEP_COLORS[index % STEP_COLORS.length] } as CSSProperties}
            >
              <div className="num">{index + 1}</div>
              <h3>{step.title}</h3>
              {step.body ? <p>{step.body}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
