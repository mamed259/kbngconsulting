import process from "node:process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const innovationStudioPageData = JSON.parse(
  readFileSync(join(__dirname, "../src/data/innovation-studio-page.json"), "utf8"),
);

const STRAPI_URL = (process.env.STRAPI_URL || "http://localhost:1337")
  .trim()
  .replace(/\/+$/, "")
  .replace(/\/admin$/, "")
  .replace(/\/api$/, "");
const STRAPI_TOKEN = process.env.STRAPI_SEED_TOKEN || process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error("Missing STRAPI_SEED_TOKEN or STRAPI_API_TOKEN. Export one before running seed.");
  process.exit(1);
}

async function strapiRequest(path, init = {}) {
  const response = await fetch(`${STRAPI_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      ...(init.headers || {}),
    },
  });

  const text = await response.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error(
        `${response.status} Forbidden — API token needs Full Access with Page create/update/publish permissions. ` +
          "Create one in Strapi Admin → Settings → API Tokens, or redeploy CMS (bootstrap seeds on startup).",
      );
    }
    throw new Error(`${response.status} ${response.statusText} -> ${JSON.stringify(body)}`);
  }

  return body;
}

async function run() {
  const findQuery = new URLSearchParams();
  findQuery.set("filters[slug][$eq]", "innovation-studio");
  findQuery.set("status", "draft");

  const existing = await strapiRequest(`/api/pages?${findQuery.toString()}`);
  const first = existing?.data?.[0];

  const payload = {
    data: {
      ...innovationStudioPageData,
      publishedAt: new Date().toISOString(),
    },
  };

  if (first) {
    const idOrDoc = first.documentId || first.id;
    const updated = await strapiRequest(`/api/pages/${idOrDoc}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    console.log("Updated innovation-studio page:", updated?.data?.id || idOrDoc);
    return;
  }

  const created = await strapiRequest("/api/pages", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log("Created innovation-studio page:", created?.data?.id || created?.data?.documentId);
}

run().catch((error) => {
  console.error("Seed failed:", error.message);
  process.exit(1);
});
