import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DynamicRenderer } from "@/components/DynamicRenderer";
import { MarketingEffects } from "@/components/MarketingEffects";
import { getPageBySlug } from "@/lib/api";
import { getStrapiMedia } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page?.seo) {
    return {};
  }

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

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <MarketingEffects />
      <DynamicRenderer sections={page.sections} />
    </>
  );
}
