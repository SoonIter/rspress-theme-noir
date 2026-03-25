# Rspress Custom Theme — Refined Noir Editorial

A warm, editorial-style custom theme for [Rspress](https://rspress.dev) v2, featuring amber accents, atmospheric gradients, and serif typography.

## Preview

| Light | Dark |
| :---: | :---: |
| ![Home Light](/screenshots/screenshot-home.png) | ![Home Dark](/screenshots/screenshot-home-dark.png) |

![Guide Page](/screenshots/screenshot-guide.png)

- Dark-first palette with warm amber/gold brand color
- Editorial typography: DM Serif Display (headings) + Instrument Sans (body) + JetBrains Mono (code)
- Custom HomeLayout with animated background orbs, hero section, feature grid, and footer
- Layout slot usage: `afterDocFooter` for a custom doc footer
- Full light/dark mode support

## Tech Stack

- [Rspress](https://rspress.dev) v2 — Rsbuild-powered static site generator
- React 19

## Project Structure

```
.
├── docs/
│   ├── index.md              # Home page (frontmatter-driven)
│   ├── guide/                # Guide section
│   └── api/                  # API reference
├── theme/
│   ├── index.tsx             # Theme entry — custom Layout with afterDocFooter slot
│   ├── index.css             # CSS variable overrides & custom styles
│   └── components/
│       └── HomeLayout/       # Fully custom home page component
├── rspress.config.ts
└── package.json
```

## How It Works

The theme is built on three customization layers:

1. **CSS Variables** — Overrides `--rp-*` variables for colors, fonts, shadows, borders, and Shiki syntax highlighting tokens
2. **Layout Slots** — Uses `afterDocFooter` slot to inject a custom footer into doc pages
3. **Custom HomeLayout** — A fully custom React component replacing the default home page, with animated background, hero section, and feature grid

## Getting Started

Prerequisites: Node.js, pnpm

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## License

MIT
