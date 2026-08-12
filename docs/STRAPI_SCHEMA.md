# Strapi Schema for `kbng`

This document describes the recommended Strapi content model for the KB&G homepage and future pages.
It is designed for remote Strapi usage and matches the frontend in this repository.

## Environment Variables

- `STRAPI_URL`
- `NEXT_PUBLIC_STRAPI_URL`
- `STRAPI_API_TOKEN`
- `STRAPI_REVALIDATE_SECONDS`

## Content Seeding Policy

- Bootstrap seeding is create-only: it creates initial records only when a matching `slug` does not exist.
- Bootstrap never deletes extra editor-created content and never overwrites existing `articles`/`pages`.
- Day-to-day content management (create/edit/publish) for `articles` and `pages` should be done in Strapi Admin.
- If you need to force-sync seeded content from code, run manual scripts in `cms/scripts/seed-*.mjs`.

## Collection Type: `page`

```json
{
  "kind": "collectionType",
  "collectionName": "pages",
  "info": {
    "singularName": "page",
    "pluralName": "pages",
    "displayName": "Page"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "title": { "type": "string", "required": true },
    "slug": { "type": "uid", "targetField": "title", "required": true },
    "seo": { "type": "component", "repeatable": false, "component": "shared.seo" },
    "sections": {
      "type": "dynamiczone",
      "components": [
        "sections.hero",
        "sections.solutions",
        "sections.consulting",
        "sections.sectors",
        "sections.book",
        "sections.resources"
      ]
    }
  }
}
```

## Shared Components

### `shared.seo`

- `metaTitle`: string (required)
- `metaDescription`: text (required)
- `canonicalUrl`: string
- `ogImage`: media (single image)

### `shared.section-config`

- `sectionId`: string
- `theme`: enumeration (`white`, `dark`, `teal`)

## Section Components

### `sections.hero`

- `sectionConfig`: component `shared.section-config`
- `eyebrow`: string
- `heading`: string (required)
- `subtitle`: text
- `primaryCtaText`: string
- `primaryCtaHref`: string
- `secondaryCtaText`: string
- `secondaryCtaHref`: string

### `sections.solutions`

- `sectionConfig`: component `shared.section-config`
- `heading`: string (required)
- `intro`: text
- `cards`: repeatable component `sections.solution-card`

### `sections.solution-card`

- `title`: string (required)
- `body`: text
- `href`: string
- `image`: media (single image)
- `accentTheme`: enumeration (`yellow`, `green`, `coral`, `slate`)

### `sections.consulting`

- `sectionConfig`: component `shared.section-config`
- `heading`: string (required)
- `cards`: repeatable component `sections.consulting-card`

### `sections.consulting-card`

- `title`: string (required)
- `body`: text
- `href`: string
- `image`: media (single image)
- `tags`: JSON or repeatable text component
- `accentTheme`: enumeration (`yellow`, `green`, `coral`, `slate`)

### `sections.sectors`

- `sectionConfig`: component `shared.section-config`
- `heading`: string (required)
- `items`: repeatable component `sections.sector-item`

### `sections.sector-item`

- `label`: string (required)
- `image`: media (single image)

### `sections.book`

- `sectionConfig`: component `shared.section-config`
- `heading`: string (required)
- `subtitle`: text
- `ctaText`: string
- `ctaHref`: string
- `showForm`: boolean
- `formFields`: repeatable component `sections.form-field`

### `sections.form-field`

- `label`: string (required)
- `type`: enumeration (`text`, `email`, `textarea`)
- `placeholder`: string
- `required`: boolean

### `sections.resources`

- `sectionConfig`: component `shared.section-config`
- `heading`: string (required)
- `cards`: repeatable component `sections.resource-card`

### `sections.resource-card`

- `title`: string (required)
- `excerpt`: text
- `href`: string
- `tag`: string
- `image`: media (single image)

## Form Submission Collection Type

Collection `form-submission` used by `POST /api/contact`:

- `name`: string (required)
- `email`: email (required)
- `company`: string
- `message`: text
- `source`: string
- `payload`: JSON

## Article Scheduled Publishing Workflow

Article schema (`cms/src/api/article/content-types/article/schema.json`) supports:

- `scheduledAt`: datetime (optional) — when draft should be auto-published
- `publishedOn`: date (required) — date shown on the website
- `publishedAt`: Strapi system field — actual publish timestamp

### Editor workflow in Strapi Admin

1. Create or edit article content.
2. Set `scheduledAt` to desired local date/time in the Strapi datetime picker.
3. Set `publishedOn` (date displayed in blog cards/article page).
4. Click **Save** and keep article as draft.
5. Do not click **Publish** manually if you want timed publishing.

### Cron behavior

- Cron task file: `cms/config/cron-tasks.ts`
- Config enablement: `cms/config/server.ts` with `CRON_ENABLED=true`
- Rule: every 5 minutes (`*/5 * * * *`)
- Task publishes draft articles where `scheduledAt <= now`

### Optional instant frontend refresh

To avoid waiting for ISR window (`STRAPI_REVALIDATE_SECONDS`), use:

- Next.js endpoint: `POST /api/revalidate`
- Secret env: `NEXT_REVALIDATE_SECRET`
- Example:
  - `POST https://kbngconsulting.com/api/revalidate?secret=...&paths=/blog,/blog/article-slug`

### Manual test checklist

1. Deploy Strapi with schema + cron changes.
2. Create draft article with `scheduledAt` 10-15 minutes in the future.
3. Save draft (no manual publish).
4. Wait until schedule time + up to 5 minutes.
5. Confirm article status is `Published` in Strapi.
6. Trigger revalidation endpoint (or wait ISR) and confirm visibility on `/blog`.
