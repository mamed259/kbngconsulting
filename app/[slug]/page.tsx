import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DynamicRenderer } from "@/components/DynamicRenderer";
import { MarketingEffects } from "@/components/MarketingEffects";
import { getPageBySlug } from "@/lib/api";
import { getStrapiMedia } from "@/lib/utils";
import { canaryWavesFallbackSections } from "@/content/canary-waves-fallback";
import { visionAiFallbackSections } from "@/content/vision-ai-fallback";
import "../canary-waves.css";
import "../vision-ai.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PAGE_FALLBACKS: Record<
  string,
  {
    title: string;
    description: string;
    url: string;
    sections: typeof canaryWavesFallbackSections | typeof visionAiFallbackSections;
  }
> = {
  "canary-waves": {
    title: "Canary Waves: AI Safety Intelligence for Mining and Quarrying Operations",
    description:
      "Canary Waves is a voice-to-data AI platform that applies machine learning for safety and industrial risk detection to your two-way radio traffic, surfacing hazards, equipment stress, and bottlenecks before they become incidents.",
    url: "https://kbngconsulting.com/canary-waves",
    sections: canaryWavesFallbackSections,
  },
  "vision-ai": {
    title: "Vision AI: Custom Computer Vision Development | KB&G",
    description:
      "Vision AI for industrial safety and beyond. Custom Vision AI development and fine-tuned computer vision for environments and products where off-the-shelf models fall short.",
    url: "https://kbngconsulting.com/kbng-innovation-studio/vision-ai",
    sections: visionAiFallbackSections,
  },
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

  const fallback = PAGE_FALLBACKS[slug];
  if (fallback) {
    return {
      title: fallback.title,
      description: fallback.description,
      openGraph: {
        title: fallback.title,
        description: fallback.description,
        type: "website",
        url: fallback.url,
      },
    };
  }

  return {};
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    const fallback = PAGE_FALLBACKS[slug];
    if (fallback) {
      return (
        <>
          <MarketingEffects />
          <DynamicRenderer sections={fallback.sections} />
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
