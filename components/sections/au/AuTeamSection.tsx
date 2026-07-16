import type { AuMemberData, AuTeamSectionData } from "@/types/strapi";
import { Container } from "@/components/ui/Container";
import { extractStrapiImageUrl } from "@/lib/utils";
import Image from "next/image";

type Props = Omit<AuTeamSectionData, "__component">;

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  const initials = words.slice(0, 2).map((word) => word[0]?.toUpperCase() ?? "");
  return initials.join("");
}

function MemberBand({ member }: { member: AuMemberData }) {
  const src = extractStrapiImageUrl(member.image || member.imageUrl);
  const tone = member.accentTone || "yellow";

  return (
    <div className={`member tone-${tone} reveal`}>
      <div className="member-mark">
        {src ? (
          <Image src={src} alt={member.name} width={72} height={72} style={{ objectFit: "cover" }} />
        ) : (
          <span>{getInitials(member.name)}</span>
        )}
      </div>
      <div className="member-copy">
        <h3>{member.name}</h3>
        <span className="member-role">{member.role}</span>
        {member.bio ? <p className="member-bio">{member.bio}</p> : null}
      </div>
    </div>
  );
}

export function AuTeamSection({ heading, members }: Props) {
  if (!members?.length) return null;

  return (
    <section className="team">
      <Container>
        <h2 className="reveal">{heading}</h2>
        <div className="member-list">
          {members.map((member) => (
            <MemberBand member={member} key={member.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
