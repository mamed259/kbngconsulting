import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import { FdHeader, FdFooter, FdReveal } from "@/components/founder-diagnostic";
import { renderSections } from "@/components/DynamicRenderer";
import { getPageBySlug } from "@/lib/api";
import { buildMetadataFromSeo } from "@/lib/seo";
import { founderDiagnosticFallbackSections } from "@/content/founder-diagnostic-fallback";
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

const FALLBACK_SEO = {
  title: "Founder Blind Spot Diagnostic | Startup Witch by KB&G",
  description:
    "You built something real. So why is nobody buying? The Blind Spot Diagnostic reads your startup in 14 days and names the one thing blocking growth. EUR 750, fully refundable.",
  url: "https://kbngconsulting.com/founder-diagnostic",
  absoluteTitle: true,
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("founder-diagnostic");
  return buildMetadataFromSeo(page?.seo, FALLBACK_SEO);
}

export default async function FounderDiagnosticPage() {
  const page = await getPageBySlug("founder-diagnostic");
  const sections = page?.sections?.length
    ? page.sections
    : founderDiagnosticFallbackSections;

  return (
    <div className={`fd-page ${inter.variable} ${caveat.variable} ${inter.className}`}>
      <FdReveal />
      <FdHeader />
      {renderSections(sections)}
      <FdFooter />
    </div>
  );
}
