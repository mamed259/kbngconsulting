import { readFileSync, existsSync } from "node:fs";
import { basename, extname } from "node:path";

/**
 * Upload a local file to Strapi media library. Returns media id or null.
 */
export async function uploadMediaFile({
  strapiUrl,
  token,
  filePath,
  fileName,
  alt,
}) {
  if (!existsSync(filePath)) {
    console.warn(`[upload] Missing file: ${filePath}`);
    return null;
  }

  const buf = readFileSync(filePath);
  const name = fileName || basename(filePath);
  const ext = extname(name).toLowerCase();
  const mime =
    ext === ".png"
      ? "image/png"
      : ext === ".jpg" || ext === ".jpeg"
        ? "image/jpeg"
        : ext === ".webp"
          ? "image/webp"
          : ext === ".gif"
            ? "image/gif"
            : "application/octet-stream";

  const form = new FormData();
  form.append("files", new Blob([buf], { type: mime }), name);
  if (alt) {
    form.append(
      "fileInfo",
      JSON.stringify({
        alternativeText: alt,
        caption: alt,
        name,
      }),
    );
  }

  const response = await fetch(`${strapiUrl}/api/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });

  const text = await response.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }

  if (!response.ok) {
    console.warn(`[upload] Failed ${name}: ${response.status} ${JSON.stringify(body)}`);
    return null;
  }

  const first = Array.isArray(body) ? body[0] : body?.[0] || body;
  const id = first?.id;
  if (!id) {
    console.warn(`[upload] No id returned for ${name}`);
    return null;
  }
  return {
    id: Number(id),
    url: first.url || null,
  };
}
