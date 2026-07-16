import type { IsAudienceSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { parseStringList } from "@/components/sections/cw/shared";

type Props = Omit<IsAudienceSectionData, "__component">;

export function IsAudienceSection({ heading, columns }: Props) {
  if (!columns?.length) return null;

  return (
    <section>
      <Container>
        <h2 style={{ margin: "1rem 0 0" }}>{heading}</h2>
        <div className="aud">
          {columns.map((col) => {
            const items = parseStringList(col.items);
            return (
              <div key={col.id} className={col.variant === "alt" ? "aud-col b" : "aud-col"}>
                {col.role ? <span className="role">{col.role}</span> : null}
                <h4>{col.heading}</h4>
                {items.length ? (
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
