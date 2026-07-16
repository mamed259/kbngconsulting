import type { Core } from "@strapi/strapi";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TOKEN_NAME = "kbng-local-read";

function tokenFilePath() {
  return join(process.cwd(), ".tmp", "local-api-token.txt");
}

function writeTokenFile(accessKey: string) {
  const dir = join(process.cwd(), ".tmp");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(tokenFilePath(), `${accessKey}\n`, "utf8");
}

/**
 * Ensures a read-only API token for local Next.js (mirrors prod frontend-read).
 * Writes plaintext key to cms/.tmp/local-api-token.txt.
 */
export async function ensureLocalReadToken(strapi: Core.Strapi) {
  const apiTokenService = strapi.service("admin::api-token");
  const outPath = tokenFilePath();
  const existing = await apiTokenService.getByName(TOKEN_NAME);

  if (existing && existsSync(outPath)) {
    strapi.log.info(`[token] "${TOKEN_NAME}" ready (${outPath})`);
    return;
  }

  if (existing) {
    const regenerated = await apiTokenService.regenerate(existing.id);
    const accessKey = regenerated?.accessKey;
    if (!accessKey) {
      strapi.log.warn(`[token] Regenerated "${TOKEN_NAME}" but no accessKey returned`);
      return;
    }
    writeTokenFile(accessKey);
    strapi.log.info(`[token] Regenerated "${TOKEN_NAME}". Key → ${outPath}`);
    return;
  }

  const created = await apiTokenService.create({
    name: TOKEN_NAME,
    description: "Local Next.js frontend (read-only) — mirrors prod frontend-read",
    type: "read-only",
    lifespan: null,
  });

  const accessKey = created?.accessKey;
  if (!accessKey) {
    strapi.log.warn(`[token] Created "${TOKEN_NAME}" but no accessKey returned`);
    return;
  }

  writeTokenFile(accessKey);
  strapi.log.info(`[token] Created "${TOKEN_NAME}". Key → ${outPath}`);
}
