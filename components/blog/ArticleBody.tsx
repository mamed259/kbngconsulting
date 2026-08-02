import { MarkdownBody } from "@/components/blog/MarkdownBody";
import {
  sanitizeArticleHtml,
  stripDuplicateTitle,
} from "@/lib/article-body";

function looksLikeHtml(content: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(content.trim());
}

/** Renders CKEditor HTML or legacy markdown bodies. */
export function ArticleBody({
  content,
  title,
}: {
  content: string;
  title?: string;
}) {
  if (!content?.trim()) return null;

  const cleaned = stripDuplicateTitle(content, title);

  if (looksLikeHtml(cleaned)) {
    return (
      <div
        className="article-richtext"
        dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(cleaned) }}
      />
    );
  }

  return <MarkdownBody content={cleaned} className="md-body" />;
}
