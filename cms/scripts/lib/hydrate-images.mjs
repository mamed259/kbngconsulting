import { join } from "node:path";
import { uploadMediaFile } from "./upload-media.mjs";

/**
 * Recursively walk page seed data: for every `imageUrl: "/images/..."`,
 * upload the local public file and set `image: <mediaId>`.
 * Keeps `imageUrl` as offline fallback for Next public assets.
 */
export async function hydrateImageUrls(value, { strapiUrl, token, rootDir, cache = new Map() }) {
  if (Array.isArray(value)) {
    const out = [];
    for (const item of value) {
      out.push(await hydrateImageUrls(item, { strapiUrl, token, rootDir, cache }));
    }
    return out;
  }

  if (!value || typeof value !== "object") return value;

  const result = {};
  for (const [key, child] of Object.entries(value)) {
    result[key] = await hydrateImageUrls(child, { strapiUrl, token, rootDir, cache });
  }

  const imageUrl = result.imageUrl;
  if (typeof imageUrl === "string" && imageUrl.startsWith("/images/")) {
    if (cache.has(imageUrl)) {
      result.image = cache.get(imageUrl);
    } else {
      const filePath = join(rootDir, "public", imageUrl.replace(/^\//, ""));
      const fileName = imageUrl.split("/").pop();
      const uploaded = await uploadMediaFile({
        strapiUrl,
        token,
        filePath,
        fileName,
        alt: result.imageAlt || result.label || result.title || fileName,
      });
      if (uploaded?.id) {
        cache.set(imageUrl, uploaded.id);
        result.image = uploaded.id;
        console.log(`  media ${uploaded.id} ← ${imageUrl}`);
      } else {
        console.warn(`  skip media ← ${imageUrl}`);
      }
    }
  }

  return result;
}
