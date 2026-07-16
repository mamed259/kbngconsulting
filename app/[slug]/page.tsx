import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DynamicRenderer } from "@/components/DynamicRenderer";
import { MarketingEffects } from "@/components/MarketingEffects";
import { getPageBySlug } from "@/lib/api";
import { getStrapiMedia } from "@/lib/utils";
import { canaryWavesFallbackSections } from "@/content/canary-waves-fallback";
import { visionAiFallbackSections } from "@/content/vision-ai-fallback";
import { innovationStudioFallbackSections } from "@/content/innovation-studio-fallback";
import { consultingServicesFallbackSections } from "@/content/consulting-services-fallback";
import { aboutUsFallbackSections } from "@/content/about-us-fallback";
import { georgiaFallbackSections } from "@/content/georgia-fallback";
import "../canary-waves.css";
import "../vision-ai.css";
import "../innovation-studio.css";
import "../consulting-services.css";
import "../about-us.css";
import "../georgia.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PAGE_FALLBACKS: Record<
  string,
  {
    title: string;
    description: string;
    url: string;
    ogTitle?: string;
    ogDescription?: string;
    sections:
      | typeof canaryWavesFallbackSections
      | typeof visionAiFallbackSections
      | typeof innovationStudioFallbackSections
      | typeof consultingServicesFallbackSections
      | typeof aboutUsFallbackSections
      | typeof georgiaFallbackSections;
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
  "innovation-studio": {
    title: "KB&G Innovation Studio | Industrial AI Built for the Field",
    description:
      "KB&G Innovation Studio builds industrial AI and software products shaped by real operators and proven on a real site before they scale.",
    url: "https://kbngconsulting.com/kbng-innovation-studio",
    sections: innovationStudioFallbackSections,
  },
  "consulting-services": {
    title: "Consulting Services | KB&G",
    description:
      "Actionable strategy that moves with your operation. Pricing, commercial performance, AI for safety and operations, and soft-skill development for heavy industry.",
    url: "https://kbngconsulting.com/consulting-services",
    sections: consultingServicesFallbackSections,
  },
  "about-us": {
    title: "About KB&G Consulting – Industrial Innovation Experts",
    description:
      "KB&G combines industrial consulting, commodity pricing, and AI innovation to serve asset‑heavy industries like gold mining, quarrying, aggregates & building materials.",
    url: "https://kbngconsulting.com/about-kbng",
    sections: aboutUsFallbackSections,
  },
  georgia: {
    title: "Georgia: AI Role-Play Coach for Industrial Communication Training | KB&G",
    description:
      "Georgia strengthens frontline communication in high-pressure industries like mining, aggregates, and ready mix through AI-powered coaching and realistic industrial scenario role-play.",
    url: "https://kbngconsulting.com/georgia",
    ogTitle: "Georgia: AI Role-Play Coach for Industrial Communication Training",
    ogDescription:
      "Corporate AI role-play for soft skills. Georgia trains your team to handle the high-pressure conversations that decide margin, safety, and retention, built for the field.",
    sections: georgiaFallbackSections,
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
        title: fallback.ogTitle ?? fallback.title,
        description: fallback.ogDescription ?? fallback.description,
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
