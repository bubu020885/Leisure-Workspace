# Leisure Workspace – Claude Code guide

## Project purpose

Leisure Workspace is a bilingual German/English landing page for free digital
planning tools aimed at leisure attractions. The current tools are:

1. Business Planner
2. Annual Budget Calculator / Jahresbudget-Rechner
3. Customer Journey Mapper

The site is presented by Amusement Business Support and includes a personal
section for Stefan Burian.

## Product rules

- Keep the experience focused on the tools; do not add pricing, accounts,
  dashboards, cloud storage or speculative product features unless explicitly
  requested.
- Tool data is not stored on a server. The promise shown on the page is:
  no login, no cloud workspace, local use and separate file export.
- Maintain both `/de` and `/en`; changes to visible content should normally be
  applied consistently in German and English.
- Keep the legal routes:
  - German: `/impressum`, `/datenschutz`
  - English: `/en/imprint`, `/en/privacy`
- Preserve the established CI: navy `#172B3A`, teal `#087E83`, ivory
  `#F5F6F0`, mint `#BDE3D1`, yellow `#FFCA19`.
- Preserve the simple ticket logo, dynamic rounded forms and the current
  professional/minimal visual tone.
- The button in Stefan Burian's profile section must continue to link to
  `https://www.stefanburian.com/`.

## Important files

- `components/landing-page.tsx` – bilingual landing-page content and layout
- `components/brand.tsx` – header/footer brand lockup
- `components/legal-page.tsx` – shared legal-page component
- `app/globals.css` – global visual system and responsive design
- `public/logo-mark.svg` – ticket logo
- `public/favicon.svg` – favicon
- `public/stefan-burian.webp` – profile photograph
- `app/de/page.tsx`, `app/en/page.tsx` – localized entry routes

## Local setup

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

The local development server is provided by Vite/Vinext. Before handing over a
change, run:

```bash
npm run build
```

The supplied build helpers target Linux and use GNU `timeout`. On macOS,
install GNU coreutils or run the equivalent Vinext/Vite build command.

## Editing guidance

- Reuse the existing React components and CSS instead of replacing the stack.
- Do not introduce a login, database or analytics without explicit approval.
- Keep navigation, dialogs, buttons and language switching keyboard accessible.
- Check desktop and mobile layouts after visual changes.
- Do not replace the supplied Stefan Burian photograph with generated imagery.
- Do not commit secrets, deployment tokens, `.env` files, `node_modules` or
  generated build folders.

## Current framework

- React 19
- Next.js-compatible app structure
- Vinext/Vite
- TypeScript
- Tailwind CSS 4 plus project-specific CSS
- Shadcn/Base UI primitives
- Lucide icons

The `.openai/hosting.json` file belongs to the existing OpenAI Sites project.
Keep its `project_id` unchanged when continuing that deployment. Remove the
file only when intentionally migrating the source to another hosting platform.
