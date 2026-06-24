import qs from "qs";
import type { PageData, StrapiCollectionResponse } from "@/types/strapi";
import { getStrapiBaseUrl } from "@/lib/utils";

const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
const rawRevalidate = Number(process.env.STRAPI_REVALIDATE_SECONDS ?? "60");
const STRAPI_REVALIDATE_SECONDS = Number.isFinite(rawRevalidate)
  ? rawRevalidate
  : 60;

async function fetchStrapi<T>(path: string, query?: string): Promise<T> {
  const url = new URL(`/api${path}`, getStrapiBaseUrl());
  if (query) {
    url.search = query;
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  const response = await fetch(url.toString(), {
    headers,
    next: { revalidate: STRAPI_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`Strapi fetch failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

function buildPagePopulateQuery() {
  return qs.stringify(
    {
      populate: {
        seo: {
          populate: ["ogImage"],
        },
        sections: {
          on: {
            "sections.hero": {
              populate: ["sectionConfig"],
            },
            "sections.solutions": {
              populate: ["sectionConfig", "cards"],
            },
            "sections.consulting": {
              populate: ["sectionConfig", "cards"],
            },
            "sections.sectors": {
              populate: ["sectionConfig", "items"],
            },
            "sections.book": {
              populate: ["sectionConfig", "formFields"],
            },
            "sections.resources": {
              populate: ["sectionConfig", "cards"],
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
}

export async function getPageBySlug(slug: string): Promise<PageData | null> {
  try {
    const query = `${qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
      },
      { encodeValuesOnly: true },
    )}&${buildPagePopulateQuery()}`;

    const response = await fetchStrapi<StrapiCollectionResponse<PageData>>(
      "/pages",
      query,
    );

    if (!response.data?.length) {
      return null;
    }

    return response.data[0];
  } catch (error) {
    console.error("Failed to fetch page from Strapi:", error);
    return null;
  }
}
