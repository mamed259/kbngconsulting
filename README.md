# kbng

KB&G boilerplate project built with Next.js App Router and Strapi.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind v4 (base)
- Custom marketing CSS (HTML-faithful styles)
- Remote Strapi integration (`qs` + typed section renderer)

## Run locally

1. Copy env file:

```bash
cp .env.example .env.local
```

2. Install dependencies:

```bash
npm install
```

3. Run dev server:

```bash
npm run dev
```

## Strapi

- Main API access is implemented in `lib/api.ts`.
- Page model uses dynamic zone sections and is rendered through `components/DynamicRenderer.tsx`.
- Strapi schema recommendation is documented in `docs/STRAPI_SCHEMA.md`.

## Homepage

- Homepage fallback content is in `content/home-fallback.ts`.
- Main stylesheet is `app/marketing.css`.
- The design uses classes aligned with the provided HTML structure.

## Fonts

- Current fallback uses Inter.
- To enable Forma DJR Deck, add licensed font files to `public/fonts` and uncomment `@font-face` in `app/marketing.css`.
