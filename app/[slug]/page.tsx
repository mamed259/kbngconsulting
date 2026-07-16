import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DynamicRenderer } from "@/components/DynamicRenderer";
import { MarketingEffects } from "@/components/MarketingEffects";
import { getPageBySlug } from "@/lib/api";
import { getStrapiMedia } from "@/lib/utils";
import { canaryWavesFallbackSections } from "@/content/canary-waves-fallback";
import "../canary-waves.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CANARY_WAVES_FALLBACK_META = {
  title: "Canary Waves: AI Safety Intelligence for Mining and Quarrying Operations",
  description:
    "Canary Waves is a voice-to-data AI platform that applies machine learning for safety and industrial risk detection to your two-way radio traffic, surfacing hazards, equipment stress, and bottlenecks before they become incidents.",
  url: "https://kbngconsulting.com/canary-waves",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (page?.seo) {
    return {
      title: page.seo.metaTitle,
      description: page.seo.metaDescription,
      openGraph: {
        title: page.seo.metaTitle,
        description: page.seo.metaDescription,
        ...(page.seo.ogImage ? { images: [{ url: getStrapiMedia(page.seo.ogImage.url) }] } : {}),
      },
      ...(page.seo.canonicalUrl ? { alternates: { canonical: page.seo.canonicalUrl } } : {}),
    };
  }

  if (slug === "canary-waves") {
    return {
      title: CANARY_WAVES_FALLBACK_META.title,
      description: CANARY_WAVES_FALLBACK_META.description,
      openGraph: {
        title: CANARY_WAVES_FALLBACK_META.title,
        description: CANARY_WAVES_FALLBACK_META.description,
        type: "website",
        url: CANARY_WAVES_FALLBACK_META.url,
      },
    };
  }

  return {};
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    if (slug === "canary-waves") {
      return (
        <>
          <MarketingEffects />
          <DynamicRenderer sections={canaryWavesFallbackSections} />
        </>
      );
    }

    notFound();
  }

  return (
    <>
      <MarketingEffects />
      <DynamicRenderer sections={page.sections} />
    </>
  );
}
