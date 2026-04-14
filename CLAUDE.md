# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Ordino AI** is a marketing/docs website for a test-automation SaaS. Stack: Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, TypeScript.

### Key structural decisions

**Tailwind v4 — no config file.** Design tokens (colors, shadows, animations, fonts) are defined entirely in `src/app/globals.css` under `@theme { … }`. There is no `tailwind.config.ts`. Add new tokens there, not in a config file.

**All static content lives in `src/lib/constants.ts`.** Nav links, marketing copy (pain points, how-it-works steps, features, integrations, footer links) are typed and exported from this one file. Sections import from it rather than hardcoding strings.

**Icons are referenced by string name in constants.ts** (e.g. `"Bot"`, `"Plug"`) and resolved to `lucide-react` components dynamically in section components. Check the installed `lucide-react` version (`^1.8.0`) before using icon names — the API changed significantly.

**Docs are file-system-driven Markdown.** Content lives in `content/docs/` as `.md` files with numeric sort prefixes (`01-introduction.md`). `src/lib/docs.ts` handles: nav-tree construction (stripping prefixes, humanizing slugs), slug↔file resolution, and Markdown→HTML rendering via `unified` + `rehype-pretty-code`. Frontmatter fields: `title`, `nav_title`, `description`. Adding a doc means dropping a `.md` file in `content/docs/` — no code changes needed.

**Page routes:**
- `/` — landing page, assembled from `src/components/sections/` (Hero, Problem, HowItWorks, Features, Integrations, CTA)
- `/pricing` — standalone pricing page
- `/docs` — redirects to first doc leaf; layout (`src/app/docs/layout.tsx`) wraps `DocsSidebar` + content
- `/docs/[...slug]` — dynamic catch-all rendered from Markdown

**Component layers:**
- `src/components/sections/` — full-width marketing sections, Server Components by default
- `src/components/layout/` — `Navbar` and `Footer`
- `src/components/docs/` — `DocsSidebar` (client component)
- `src/components/ui/` — reusable primitives: `AnimateOnScroll` (Framer Motion scroll reveal, client), `Badge`, `GlowCard`, `GradientText`

**Styling conventions:**
- Dark-only design; base background `#020817` (`--color-base`)
- Utility classes from Tailwind v4 + custom CSS classes defined in `globals.css` (`.hero-glow`, `.gradient-text`, `.gradient-border-card`, `.glow-card`, `.dot-grid`, `.docs-prose`, `.section-padding`, etc.)
- Docs content styled via `.docs-prose` prose class (custom, not Tailwind Typography)

**Integration logos** are SVG files in `public/integrations/` and referenced by the `logo` field on `Integration` objects in constants.ts.

**Fonts:** Geist Sans + Geist Mono via `next/font/google`, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`.
