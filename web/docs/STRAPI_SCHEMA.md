# Strapi Schema for `kbng`

This document describes the recommended Strapi content model for the KB&G homepage and future pages.
It is designed for remote Strapi usage and matches the frontend in this repository.

## Environment Variables

- `STRAPI_URL`
- `NEXT_PUBLIC_STRAPI_URL`
- `STRAPI_API_TOKEN`
- `STRAPI_REVALIDATE_SECONDS`

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
