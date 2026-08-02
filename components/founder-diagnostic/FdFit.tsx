import type { FdFitSectionData } from "@/types/strapi";

type Props = Omit<FdFitSectionData, "__component">;

export function FdFit({
  sectionConfig,
  heading,
  lede,
  eligibleHeading,
  eligibleItems = [],
  notEligibleHeading,
  notEligibleItems = [],
}: Props) {
  return (
    <section id={sectionConfig?.sectionId || "fit"} style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="head reveal">
          <h2>{heading}</h2>
          {lede ? <p className="lede">{lede}</p> : null}
        </div>
        <div className="fit">
          <div className="fitcard yes reveal">
            <h3>
              <span className="flag" style={{ width: "13px", height: "13px" }} />
              {eligibleHeading || "Eligible if"}
            </h3>
            {eligibleItems.map((item) => (
              <li key={item.id ?? item.text}>
                <span className="m">+</span>
                {item.text}
              </li>
            ))}
          </div>
          <div className="fitcard no reveal">
            <h3>{notEligibleHeading || "Not eligible if"}</h3>
            {notEligibleItems.map((item) => (
              <li key={item.id ?? item.text}>
                <span className="m">−</span>
                {item.text}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
