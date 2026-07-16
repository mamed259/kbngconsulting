import Link from "next/link";
import type { IsBrandbarSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";

type Props = Omit<IsBrandbarSectionData, "__component">;

export function IsBrandbarSection({ label, chips }: Props) {
  if (!chips?.length) return null;

  const left = chips.slice(0, Math.min(2, chips.length));
  const right = chips.slice(2);

  return (
    <nav className="brandbar" aria-label={label || "Our products"}>
      <Container className="brandbar-inner">
        {label ? <span className="bb-label">{label}</span> : null}
        <div className="bb-group">
          {left.map((chip) => (
            <Link key={chip.id} className="bb-chip" href={chip.href || `#${chip.targetId || ""}`}>
              {chip.label}
            </Link>
          ))}
        </div>
        {right.length ? (
          <>
            <span className="bb-div" />
            <div className="bb-group">
              {right.map((chip) => (
                <Link key={chip.id} className="bb-chip" href={chip.href || `#${chip.targetId || ""}`}>
                  {chip.label}
                </Link>
              ))}
            </div>
          </>
        ) : null}
      </Container>
    </nav>
  );
}
