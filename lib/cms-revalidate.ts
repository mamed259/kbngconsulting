export const CMS_CACHE_TAG = "cms";

const PAGE_SLUG_TO_PATH: Record<string, string> = {
  home: "/",
  blog: "/blog",
  "founder-diagnostic": "/founder-diagnostic",
};

export function pathForPageSlug(slug: string): string {
  return PAGE_SLUG_TO_PATH[slug] ?? `/${slug}`;
}

export function pathsForCmsEvent(input: {
  model?: string | null;
  slug?: string | null;
  extraPaths?: string[];
}): string[] {
  const paths = new Set<string>(["/", "/blog"]);
  const model = (input.model || "").toLowerCase();
  const slug = input.slug?.trim() || "";

  if (model.includes("article") && slug) {
    paths.add(`/blog/${slug}`);
  }

  if (model.includes("page") && slug) {
    paths.add(pathForPageSlug(slug));
  }

  for (const path of input.extraPaths ?? []) {
    if (path.startsWith("/")) paths.add(path);
  }

  return Array.from(paths);
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

export function parseCmsWebhookPayload(body: unknown): {
  model?: string;
  slug?: string;
  extraPaths: string[];
} {
  const record = asRecord(body);
  if (!record) return { extraPaths: [] };

  const entry = asRecord(record.entry);
  const data = asRecord(record.data);
  const model =
    (typeof record.model === "string" && record.model) ||
    (typeof record.uid === "string" && record.uid) ||
    undefined;
  const slugCandidate =
    (typeof entry?.slug === "string" && entry.slug) ||
    (typeof data?.slug === "string" && data.slug) ||
    (typeof record.slug === "string" && record.slug) ||
    undefined;

  const extraPaths: string[] = [];
  const rawPaths = record.paths;
  if (Array.isArray(rawPaths)) {
    for (const path of rawPaths) {
      if (typeof path === "string" && path.startsWith("/")) extraPaths.push(path);
    }
  }

  return { model, slug: slugCandidate, extraPaths };
}
