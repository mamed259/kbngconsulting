import type { CSSProperties } from "react";

export type CwTheme = {
  t: string;
  tDim: string;
  tFaint: string;
};

export const cwThemes = {
  yellow: {
    t: "#FFF275",
    tDim: "rgba(255, 242, 117, 0.42)",
    tFaint: "rgba(255, 242, 117, 0.10)",
  },
  mint: {
    t: "#68FFCF",
    tDim: "rgba(104, 255, 207, 0.42)",
    tFaint: "rgba(104, 255, 207, 0.10)",
  },
  coral: {
    t: "#FF5A75",
    tDim: "rgba(255, 90, 117, 0.42)",
    tFaint: "rgba(255, 90, 117, 0.10)",
  },
  blue: {
    t: "#7aa7d9",
    tDim: "rgba(122, 167, 217, 0.42)",
    tFaint: "rgba(122, 167, 217, 0.10)",
  },
} as const satisfies Record<string, CwTheme>;

export function cwThemeStyle(theme: CwTheme): CSSProperties {
  return {
    "--t": theme.t,
    "--t-dim": theme.tDim,
    "--t-faint": theme.tFaint,
  } as CSSProperties;
}
