import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function normalizeStrapiUrl(rawUrl?: string) {
  const fallback = "http://localhost:1337";
  if (!rawUrl) return fallback;

  return rawUrl
    .trim()
    .replace(/\/+$/, "")
    .replace(/\/admin$/, "")
    .replace(/\/api$/, "");
}

export function getStrapiBaseUrl() {
  return normalizeStrapiUrl(
    process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL,
  );
}

export function getStrapiMedia(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${getStrapiBaseUrl()}${url.startsWith("/") ? "" : "/"}${url}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function extractStrapiImageUrl(value: unknown): string {
  if (!value) return "";
  if (typeof value === "string") {
    if (value.startsWith("/")) return value;
    return getStrapiMedia(value);
  }

  if (isRecord(value)) {
    const directUrl = value.url;
    if (typeof directUrl === "string") {
      return getStrapiMedia(directUrl);
    }

    const data = value.data;
    if (isRecord(data) && typeof data.url === "string") {
      return getStrapiMedia(data.url);
    }
  }

  return "";
}
