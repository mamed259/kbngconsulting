import type { CwCultureCardData } from "@/types/strapi";
import { CwNetworkIcon, CwRadioIcon, CwToneIcon } from "@/components/canary-waves/CwIcons";

export function CwCultureIcon({ type }: { type: CwCultureCardData["icon"] }) {
  if (type === "tone") return <CwToneIcon />;
  if (type === "network") return <CwNetworkIcon />;
  return <CwRadioIcon />;
}

export function parseStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}
