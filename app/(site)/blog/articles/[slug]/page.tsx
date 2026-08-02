import { permanentRedirect } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Legacy /blog/articles/:slug → /blog/:slug */
export default async function LegacyArticleRedirect({ params }: Props) {
  const { slug } = await params;
  permanentRedirect(`/blog/${slug}`);
}
