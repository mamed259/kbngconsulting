/**
 * Detect Google Docs / CKEditor paste: long inline style spam, black text, empty uploads.
 */
export function isDirtyPasteHtml(body: string): boolean {
  if (!body) return false;
  const html = body.trim();
  if (!/^</.test(html) && !/<\/[a-z]/i.test(html)) return false;

  return (
    /color:\s*#000000/i.test(html) ||
    /font-family:\s*Arial/i.test(html) ||
    /data-ck-upload-id/i.test(html) ||
    (/dir="ltr"/i.test(html) && /white-space:\s*pre-wrap/i.test(html)) ||
    /id="docs-internal-guid/i.test(html)
  );
}

function looksLikeHtml(content: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(content.trim());
}

/** Prefer clean markdown/fallback over Google Docs HTML paste. */
export function pickArticleBody(remote?: string | null, fallback?: string | null): string {
  const r = remote?.trim() || "";
  const f = fallback?.trim() || "";
  if (!r) return f;
  if (!f) return r;

  if (isDirtyPasteHtml(r) && !isDirtyPasteHtml(f)) return f;
  if (looksLikeHtml(r) && !looksLikeHtml(f) && f.length > 400) return f;

  return r.length >= f.length ? r : f;
}

const STYLE_PROPS_TO_STRIP =
  /(?:^|;)\s*(?:color|background(?:-color)?|font-family|font-size|font-variant|font-style|font-weight|text-decoration|vertical-align|white-space|line-height|margin(?:-top|-bottom|-left|-right)?|padding(?:-top|-bottom|-left|-right)?)\s*:[^;]*/gi;

function cleanStyleAttr(style: string): string {
  const cleaned = style
    .replace(STYLE_PROPS_TO_STRIP, "")
    .replace(/;{2,}/g, ";")
    .replace(/^;|;$/g, "")
    .trim();
  return cleaned;
}

/**
 * Strip Google Docs / paste noise so teal article CSS controls the look.
 */
export function sanitizeArticleHtml(html: string): string {
  let out = html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");

  // Drop empty / broken CKEditor upload images
  out = out.replace(/<img\b[^>]*>/gi, (tag) => {
    const srcMatch = tag.match(/\bsrc\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const src = (srcMatch?.[2] ?? srcMatch?.[3] ?? srcMatch?.[4] ?? "").trim();
    if (!src || src === "#" || /^data:image\/gif;base64,R0lGOD/i.test(src)) {
      return "";
    }
    return tag;
  });

  // Remove "Alt text: ..." paragraphs left over from Docs
  out = out.replace(
    /<(p|span|div)\b[^>]*>\s*Alt text:\s*[^<]*<\/\1>/gi,
    "",
  );
  out = out.replace(/\bAlt text:\s*[^\n<]+/gi, "");

  // Remove trailing meta title / description dumps
  out = out.replace(
    /<(p|h[1-6]|div)\b[^>]*>\s*Meta title:\s*[\s\S]*?<\/\1>/gi,
    "",
  );
  out = out.replace(
    /<(p|h[1-6]|div)\b[^>]*>\s*Meta description:\s*[\s\S]*?<\/\1>/gi,
    "",
  );
  out = out.replace(/\bMeta title:\s*[^\n<]+/gi, "");
  out = out.replace(/\bMeta description:\s*[^\n<]+/gi, "");

  // Strip Docs inline styles that force black text / Arial
  out = out.replace(/\sstyle\s*=\s*("([^"]*)"|'([^']*)')/gi, (_full, _q, double, single) => {
    const raw = double ?? single ?? "";
    const cleaned = cleanStyleAttr(raw);
    return cleaned ? ` style="${cleaned}"` : "";
  });

  // Unwrap empty-ish style spans that only carried Docs formatting
  for (let i = 0; i < 4; i++) {
    out = out.replace(/<span(?:\s[^>]*)?>\s*<\/span>/gi, "");
    out = out.replace(/<span>([\s\S]*?)<\/span>/gi, "$1");
  }

  // Drop dir=ltr noise
  out = out.replace(/\sdir=("ltr"|'ltr')/gi, "");

  return out.trim();
}

/** Drop a leading heading that duplicates the page title. */
export function stripDuplicateTitle(body: string, title?: string | null): string {
  if (!body || !title) return body;
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  if (looksLikeHtml(body)) {
    return body
      .replace(
        new RegExp(
          `^\\s*<h1\\b[^>]*>\\s*(?:<[^>]+>\\s*)*<strong>\\s*${escaped}\\s*<\\/strong>(?:\\s*<\\/[^>]+>)*\\s*<\\/h1>`,
          "i",
        ),
        "",
      )
      .replace(new RegExp(`^\\s*<h1\\b[^>]*>\\s*${escaped}\\s*<\\/h1>`, "i"), "")
      .trim();
  }

  return body
    .replace(new RegExp(`^#{1,3}\\s*\\*?\\*?${escaped}\\*?\\*?\\s*\\n+`, "i"), "")
    .trim();
}
