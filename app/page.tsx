import type { Metadata } from "next";
import { DynamicRenderer } from "@/components/DynamicRenderer";
import { MarketingEffects } from "@/components/MarketingEffects";
import { getPageBySlug } from "@/lib/api";
import { homeFallbackSections } from "@/content/home-fallback";

const HOME_TITLE = "KB&G · Industrial Innovation Studio";
const HOME_DESCRIPTION =
  "AI solutions built for heavy industry, plus consulting tailored to your operations.";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
};

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
