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
