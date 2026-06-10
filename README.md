# StackLens — Tech Behind the Apps

> A premium dark-mode web app that maps the engineering stacks powering the world's most-used products.

![StackLens](https://img.shields.io/badge/React-18-blue?style=flat-square) ![Vite](https://img.shields.io/badge/Vite-5-purple?style=flat-square) ![TailwindCSS](https://img.shields.io/badge/Tailwind-3-cyan?style=flat-square) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-pink?style=flat-square)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — Push to GitHub and import in vercel.com
```

## Features

- **7 apps** covered: Netflix, Spotify, Instagram, WhatsApp, Uber, TikTok, Airbnb
- **Full stack breakdown** — Frontend, Backend, Database, Cloud, AI & Scaling strategy for each app
- **Side-by-side compare** — Pick any two apps and compare their stacks
- **Instant search** — Filter by app name, technology, or category
- **Category filters** — Browse by Entertainment, Music, Social, Messaging, Transport, Travel
- **Dark / Light toggle** — System-aware with manual override
- **Smooth transitions** — Framer Motion page and card animations
- **Loading skeletons** — Progressive content reveal
- **Fully responsive** — Mobile, tablet, desktop

## Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Routing | React Router 6 |
| Icons | React Icons 5 |
| Data | Local JSON (no backend) |

## Project Structure

```
src/
├── animations/     # Framer Motion variants
├── components/
│   ├── cards/      # AppCard, StackSection
│   ├── layout/     # Navbar, Footer
│   └── ui/         # SearchBar, CategoryFilter, Skeleton, EmptyState
├── data/           # apps.js — all app data
├── hooks/          # useTheme, useSearch
└── pages/          # Home, Explore, AppDetail, Compare, NotFound
```

## Design System

- **Colors**: `#050505` base · `#39ff14` neon green accent · `#f5f5f5` soft white
- **Typography**: DM Sans (Google Fonts)
- **Borders**: `white/[0.06]` — subtle, consistent
- **Hover states**: `y: -4px` lift + border brightening
- **Glow effects**: `box-shadow` with low-opacity green
