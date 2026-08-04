import Image from "next/image";
import type { AuMemberData, AuTeamSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";

type Props = Omit<AuTeamSectionData, "__component">;

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

function MemberCard({ member }: { member: AuMemberData }) {
  const src = extractStrapiImageUrl(member.image || member.imageUrl);
  const tone = member.accentTone || "yellow";

  return (
    <article className={`au-member tone-${tone} reveal`}>
      <div className="au-member-top">
        <div className="au-member-mark">
          {src ? (
            <Image src={src} alt={member.name} width={88} height={88} style={{ objectFit: "cover" }} />
          ) : (
            <span>{getInitials(member.name)}</span>
          )}
        </div>
        <div>
          <h3>{member.name}</h3>
          <span className="au-member-role">{member.role}</span>
        </div>
      </div>
      {member.bio ? <p className="au-member-bio">{member.bio}</p> : null}
    </article>
  );
}

export function AuTeamSection({ heading, members }: Props) {
  if (!members?.length) return null;

  return (
    <section className="au-team">
      <Container>
        <div className="kicker reveal" style={{ ["--t" as string]: "var(--yellow)" }}>
          <span className="flag yellow" aria-hidden="true" />
          People
        </div>
        <h2 className="reveal">{heading}</h2>
        <div className="au-member-grid">
          {members.map((member) => (
            <MemberCard member={member} key={member.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
