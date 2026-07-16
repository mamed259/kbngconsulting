import { MarkdownBody } from "@/components/blog/MarkdownBody";

function looksLikeHtml(content: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(content.trim());
}

function sanitizeArticleHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
}

/** Renders CKEditor HTML or legacy markdown bodies. */
export function ArticleBody({ content }: { content: string }) {
  if (!content?.trim()) return null;

  if (looksLikeHtml(content)) {
    return (
      <div
        className="article-richtext"
        dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(content) }}
      />
    );
  }

  return <MarkdownBody content={content} />;
}
