import type { CwPillsSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { cwThemeStyle, cwThemes } from "@/components/canary-waves/types";
import { parseStringList } from "@/components/sections/cw/shared";

type Props = Omit<CwPillsSectionData, "__component">;

export function CwPillsSection({ label, items }: Props) {
  const pills = parseStringList(items);
  if (!pills.length) return null;

  return (
    <section className="cw-pills-band" style={cwThemeStyle(cwThemes.mint)}>
      <Container>
        <div className="reveal">
          {label ? <p className="label">{label}</p> : null}
          <div className="pills">
            {pills.map((pill) => (
              <span key={pill} className="pill">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
