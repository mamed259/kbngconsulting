import type { Metadata } from "next";
import { CanaryWavesPage } from "@/components/canary-waves/CanaryWavesPage";
import { MarketingEffects } from "@/components/MarketingEffects";
import "../canary-waves.css";

export const metadata: Metadata = {
  title: "Canary Waves: AI Safety Intelligence for Mining and Quarrying Operations",
  description:
    "Canary Waves is a voice-to-data AI platform that applies machine learning for safety and industrial risk detection to your two-way radio traffic, surfacing hazards, equipment stress, and bottlenecks before they become incidents.",
  openGraph: {
    title: "Canary Waves: AI Safety Intelligence for Mining and Quarrying Operations",
    description:
      "Voice-to-data AI and machine learning for safety. Canary Waves turns two-way radio traffic into predictive safety analytics for mining and quarrying operations.",
    type: "website",
    url: "https://kbngconsulting.com/canary-waves",
  },
};

export default function CanaryWavesRoute() {
  return (
    <>
      <MarketingEffects />
      <CanaryWavesPage />
    </>
  );
}
