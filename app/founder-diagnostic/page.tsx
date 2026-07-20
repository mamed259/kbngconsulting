import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import {
  FdHeader,
  FdFooter,
  FdReveal,
  FdHero,
  FdSignals,
  FdBlindspot,
  FdNormal,
  FdCase,
  FdMethod,
  FdExaminer,
  FdProof,
  FdHow,
  FdFit,
  FdMidCta,
  FdFaq,
  FdBook,
} from "@/components/founder-diagnostic";
import "../founder-diagnostic.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--fd-font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--fd-font-caveat",
});

export const metadata: Metadata = {
  title: {
    absolute: "The Founder Diagnostic | Startup Witch by KB&G",
  },
  description:
    "You built something real. So why is nobody buying? An adversarial read of your startup in 14 days. EUR 750, fully refundable.",
  openGraph: {
    title: "The Founder Diagnostic | Startup Witch by KB&G",
    description:
      "You built something real. So why is nobody buying? An adversarial read of your startup in 14 days. EUR 750, fully refundable.",
    type: "website",
    url: "https://kbngconsulting.com/founder-diagnostic",
  },
};

export default function FounderDiagnosticPage() {
  return (
    <div className={`fd-page ${inter.variable} ${caveat.variable} ${inter.className}`}>
      <FdReveal />
      <FdHeader />
      <FdHero />
      <FdSignals />
      <FdBlindspot />
      <FdNormal />
      <FdCase />
      <FdMethod />
      <FdExaminer />
      <FdProof />
      <FdHow />
      <FdFit />
      <FdMidCta />
      <FdFaq />
      <FdBook />
      <FdFooter />
    </div>
  );
}
