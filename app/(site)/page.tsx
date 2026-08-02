import type { Metadata } from "next";
import { DynamicRenderer } from "@/components/DynamicRenderer";
import { MarketingEffects } from "@/components/MarketingEffects";
import { getPageBySlug } from "@/lib/api";
import { homeFallbackSections } from "@/content/home-fallback";
import { buildMetadataFromSeo } from "@/lib/seo";

const HOME_FALLBACK = {
  title: "KB&G · Industrial Innovation Studio",
  description:
    "AI solutions built for heavy industry, plus consulting tailored to your operations.",
  url: "https://kbngconsulting.com/",
  absoluteTitle: true,
};

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("home");
  const hero = page?.sections?.find((section) => section.__component === "sections.hero") as
    | { image?: unknown; imageUrl?: string }
    | undefined;

  return buildMetadataFromSeo(page?.seo, HOME_FALLBACK, {
    fallbackOgImage: hero?.image || hero?.imageUrl || "/images/home/heart.png",
  });
}

export default async function HomePage() {
  const page = await getPageBySlug("home");
  const sections = page?.sections?.length ? page.sections : homeFallbackSections;

  return (
    <>
      <MarketingEffects />
      <DynamicRenderer sections={sections} />
    </>
  );
}
