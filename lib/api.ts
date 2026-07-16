import qs from "qs";
import type { ArticleData, PageData, StrapiCollectionResponse } from "@/types/strapi";
import { getStrapiBaseUrl } from "@/lib/utils";

const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;
const rawRevalidate = Number(process.env.STRAPI_REVALIDATE_SECONDS ?? "60");
const STRAPI_REVALIDATE_SECONDS = Number.isFinite(rawRevalidate)
  ? rawRevalidate
  : 60;

type SectionPopulateMap = Record<string, unknown>;

const BASE_SECTION_POPULATE: SectionPopulateMap = {
  "sections.hero": {
    populate: "*",
  },
  "sections.solutions": {
    populate: {
      sectionConfig: true,
      cards: {
        populate: ["image"],
      },
    },
  },
  "sections.consulting": {
    populate: {
      sectionConfig: true,
      cards: {
        populate: ["image"],
      },
    },
  },
  "sections.sectors": {
    populate: {
      sectionConfig: true,
      items: {
        populate: ["image"],
      },
    },
  },
  "sections.book": {
    populate: ["sectionConfig", "formFields"],
  },
  "sections.resources": {
    populate: {
      sectionConfig: true,
      cards: {
        populate: ["image"],
      },
    },
  },
};

const CW_SECTION_POPULATE: SectionPopulateMap = {
  "sections.cw-hero": {
    populate: "*",
  },
  "sections.cw-stats": {
    populate: {
      items: true,
    },
  },
  "sections.cw-insight": {
    populate: {
      gapItems: true,
      image: true,
    },
  },
  "sections.cw-issues": {
    populate: {
      sectionConfig: true,
      cards: true,
    },
  },
  "sections.cw-culture": {
    populate: {
      cards: {
        populate: ["image"],
      },
    },
  },
  "sections.cw-pills": {
    populate: true,
  },
  "sections.cw-workflow": {
    populate: {
      sectionConfig: true,
      steps: true,
    },
  },
  "sections.cw-adopt": {
    populate: {
      cards: true,
    },
  },
  "sections.cw-quote": {
    populate: true,
  },
  "sections.cw-faq": {
    populate: {
      items: true,
    },
  },
  "sections.cw-cta": {
    populate: true,
  },
};

const VA_SECTION_POPULATE: SectionPopulateMap = {
  "sections.va-hero": {
    populate: "*",
  },
  "sections.va-insight": {
    populate: true,
  },
  "sections.va-build": {
    populate: {
      cards: {
        populate: ["image"],
      },
    },
  },
  "sections.va-examples": {
    populate: {
      sectionConfig: true,
      cards: true,
    },
  },
  "sections.va-lens": {
    populate: {
      cards: true,
    },
  },
  "sections.va-audience": {
    populate: {
      cards: true,
    },
  },
  "sections.va-workflow": {
    populate: {
      steps: true,
    },
  },
  "sections.va-quote": {
    populate: true,
  },
  "sections.va-faq": {
    populate: {
      items: true,
    },
  },
  "sections.va-cta": {
    populate: true,
  },
};

const IS_SECTION_POPULATE: SectionPopulateMap = {
  "sections.is-hero": {
    populate: "*",
  },
  "sections.is-brandbar": {
    populate: {
      chips: true,
    },
  },
  "sections.is-thesis": {
    populate: {
      pillars: true,
    },
  },
  "sections.is-products": {
    populate: {
      sectionConfig: true,
      cards: {
        populate: ["image"],
      },
    },
  },
  "sections.is-founders": {
    populate: true,
  },
  "sections.is-audience": {
    populate: {
      columns: true,
    },
  },
  "sections.is-bridge": {
    populate: {
      sectionConfig: true,
      pillars: true,
    },
  },
  "sections.is-cta": {
    populate: true,
  },
};

const CS_SECTION_POPULATE: SectionPopulateMap = {
  "sections.cs-hero": {
    populate: {
      sectionConfig: true,
      logos: {
        populate: ["image"],
      },
    },
  },
  "sections.cs-service": {
    populate: {
      sectionConfig: true,
      image: true,
      offers: true,
    },
  },
  "sections.cs-abe": {
    populate: {
      sectionConfig: true,
      steps: true,
    },
  },
  "sections.cs-quote": {
    populate: {
      sectionConfig: true,
    },
  },
  "sections.cs-cta": {
    populate: {
      sectionConfig: true,
    },
  },
};

const AU_SECTION_POPULATE: SectionPopulateMap = {
  "sections.au-hero": {
    populate: {
      sectionConfig: true,
    },
  },
  "sections.au-mission": {
    populate: {
      sectionConfig: true,
    },
  },
  "sections.au-story": {
    populate: {
      sectionConfig: true,
    },
  },
  "sections.au-meaning": {
    populate: {
      sectionConfig: true,
    },
  },
  "sections.au-timeline": {
    populate: {
      sectionConfig: true,
      items: true,
    },
  },
  "sections.au-team": {
    populate: {
      sectionConfig: true,
      members: {
        populate: ["image"],
      },
    },
  },
  "sections.au-cta": {
    populate: {
      sectionConfig: true,
    },
  },
};

const GE_SECTION_POPULATE: SectionPopulateMap = {
  "sections.ge-hero": {
    populate: {
      sectionConfig: true,
      image: true,
    },
  },
  "sections.ge-stats": {
    populate: {
      sectionConfig: true,
      items: true,
    },
  },
  "sections.ge-service": {
    populate: {
      sectionConfig: true,
      image: true,
      offers: true,
    },
  },
  "sections.ge-abe": {
    populate: {
      sectionConfig: true,
      steps: true,
    },
  },
  "sections.ge-audience": {
    populate: {
      sectionConfig: true,
      cards: true,
    },
  },
  "sections.ge-quote": {
    populate: {
      sectionConfig: true,
    },
  },
  "sections.ge-role": {
    populate: {
      sectionConfig: true,
    },
  },
  "sections.ge-faq": {
    populate: {
      sectionConfig: true,
      items: true,
    },
  },
  "sections.ge-cta": {
    populate: {
      sectionConfig: true,
    },
  },
};

function buildPagePopulateQuery(sectionPopulate: SectionPopulateMap) {
  return qs.stringify(
    {
      populate: {
        seo: {
          populate: ["ogImage"],
        },
        sections: {
          on: sectionPopulate,
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
}

function extractInvalidPopulateKey(errorBody: unknown): string | null {
  if (!errorBody || typeof errorBody !== "object") return null;
  const error = (errorBody as { error?: { details?: { key?: string }; message?: string } })
    .error;
  if (error?.details?.key) return error.details.key;
  const message = error?.message ?? "";
  const match = message.match(/Invalid key ([^\s]+) at/);
  return match?.[1] ?? null;
}

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
    ...(STRAPI_REVALIDATE_SECONDS === 0
      ? { cache: "no-store" as const }
      : { next: { revalidate: STRAPI_REVALIDATE_SECONDS } }),
  });

  if (!response.ok) {
    let details = "";
    try {
      details = await response.text();
    } catch {
      details = "";
    }

    const error = new Error(
      `Strapi fetch failed: ${response.status} ${response.statusText}${details ? ` -> ${details}` : ""}`,
    ) as Error & { status?: number; body?: unknown };
    error.status = response.status;
    try {
      error.body = details ? JSON.parse(details) : null;
    } catch {
      error.body = details;
    }
    throw error;
  }

  return response.json() as Promise<T>;
}

export async function getPageBySlug(slug: string): Promise<PageData | null> {
  const sectionPopulate: SectionPopulateMap = {
    ...BASE_SECTION_POPULATE,
    ...CW_SECTION_POPULATE,
    ...VA_SECTION_POPULATE,
    ...IS_SECTION_POPULATE,
    ...CS_SECTION_POPULATE,
    ...AU_SECTION_POPULATE,
    ...GE_SECTION_POPULATE,
  };

  try {
    for (let attempt = 0; attempt < 12; attempt += 1) {
      const query = `${qs.stringify(
        {
          filters: {
            slug: {
              $eq: slug,
            },
          },
        },
        { encodeValuesOnly: true },
      )}&${buildPagePopulateQuery(sectionPopulate)}`;

      try {
        const response = await fetchStrapi<StrapiCollectionResponse<PageData>>(
          "/pages",
          query,
        );

        if (!response.data?.length) {
          return null;
        }

        return response.data[0];
      } catch (error) {
        const status =
          error && typeof error === "object" && "status" in error
            ? Number((error as { status?: number }).status)
            : undefined;
        const body =
          error && typeof error === "object" && "body" in error
            ? (error as { body?: unknown }).body
            : undefined;
        const invalidKey = status === 400 ? extractInvalidPopulateKey(body) : null;

        if (invalidKey && invalidKey in sectionPopulate) {
          delete sectionPopulate[invalidKey];
          continue;
        }

        throw error;
      }
    }

    return null;
  } catch (error) {
    console.error("Failed to fetch page from Strapi:", error);
    return null;
  }
}

const ARTICLE_POPULATE = {
  seo: {
    populate: ["ogImage"],
  },
  coverImage: true,
} as const;

export async function getArticles(): Promise<ArticleData[]> {
  try {
    const query = qs.stringify(
      {
        sort: ["id:asc"],
        populate: ARTICLE_POPULATE,
        pagination: { pageSize: 100 },
      },
      { encodeValuesOnly: true },
    );

    const response = await fetchStrapi<StrapiCollectionResponse<ArticleData>>(
      "/articles",
      query,
    );

    const articles = response.data ?? [];
    return articles;
  } catch (error) {
    console.error("Failed to fetch articles from Strapi:", error);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<ArticleData | null> {
  try {
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: ARTICLE_POPULATE,
      },
      { encodeValuesOnly: true },
    );

    const response = await fetchStrapi<StrapiCollectionResponse<ArticleData>>(
      "/articles",
      query,
    );

    if (!response.data?.length) {
      return null;
    }

    return response.data[0];
  } catch (error) {
    console.error("Failed to fetch article from Strapi:", error);
    return null;
  }
}
