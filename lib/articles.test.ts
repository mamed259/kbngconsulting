import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { ArticleData } from "../types/strapi";
import { mergeArticle, mergeArticles } from "./articles";
import { parseCmsWebhookPayload, pathForPageSlug, pathsForCmsEvent } from "./cms-revalidate";

function article(partial: Partial<ArticleData> & Pick<ArticleData, "slug" | "title">): ArticleData {
  return {
    id: 1,
    publishedOn: "2026-01-01",
    body: "fallback body",
    ...partial,
  };
}

describe("mergeArticle", () => {
  it("uses the live Strapi title instead of the hardcoded fallback", () => {
    const fallback = article({
      slug: "mining-safety-shares",
      title: "Old fallback title",
      excerpt: "Old excerpt",
    });
    const remote = article({
      id: 42,
      slug: "mining-safety-shares",
      title: "New title from Strapi",
      excerpt: "New excerpt",
      body: "live body that is long enough to win",
    });

    const merged = mergeArticle(remote, fallback);
    assert.equal(merged?.title, "New title from Strapi");
    assert.equal(merged?.excerpt, "New excerpt");
    assert.equal(merged?.id, 42);
  });

  it("keeps fallback title only when Strapi title is empty", () => {
    const merged = mergeArticle(
      article({ slug: "x", title: "   ", excerpt: "live" }),
      article({ slug: "x", title: "Fallback title" }),
    );
    assert.equal(merged?.title, "Fallback title");
  });
});

describe("mergeArticles listing vs detail", () => {
  it("shows the updated title on the blog index for seeded slugs", () => {
    const fallback = [
      article({ slug: "a", title: "Fallback A", publishedOn: "2026-01-02" }),
      article({ slug: "b", title: "Fallback B", publishedOn: "2026-01-01" }),
    ];
    const remote = [
      article({
        id: 9,
        slug: "a",
        title: "Published A",
        publishedOn: "2026-01-02",
      }),
    ];

    const list = mergeArticles(remote, fallback);
    assert.equal(list.find((item) => item.slug === "a")?.title, "Published A");
    assert.equal(list.find((item) => item.slug === "b")?.title, "Fallback B");
  });
});

describe("cms revalidate mapping", () => {
  it("maps page slugs to frontend routes including home metadata", () => {
    assert.equal(pathForPageSlug("home"), "/");
    assert.equal(pathForPageSlug("blog"), "/blog");
    assert.equal(pathForPageSlug("canary-waves"), "/canary-waves");
  });

  it("busts listing and detail when an article is published", () => {
    const paths = pathsForCmsEvent({ model: "article", slug: "new-title-slug" });
    assert.ok(paths.includes("/"));
    assert.ok(paths.includes("/blog"));
    assert.ok(paths.includes("/blog/new-title-slug"));
  });

  it("parses Strapi webhook entry payloads", () => {
    const parsed = parseCmsWebhookPayload({
      event: "entry.publish",
      model: "page",
      entry: { slug: "about-us", seo: { metaTitle: "New SEO" } },
    });
    assert.equal(parsed.model, "page");
    assert.equal(parsed.slug, "about-us");
    assert.deepEqual(pathsForCmsEvent(parsed).sort(), ["/", "/about-us", "/blog"].sort());
  });
});
