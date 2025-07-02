# 🎧 Podcast Library

![Tech Stack](https://img.shields.io/badge/Next.js-15.0.0-000000?style=flat&logo=next.js)
![Tech Stack](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)
![Tech Stack](https://img.shields.io/badge/Tailwind_CSS-3.4.3-06B6D4?style=flat&logo=tailwindcss)
![Tech Stack](https://img.shields.io/badge/shadcn/ui-0.0.0-000000?style=flat&logo=react)
![Tech Stack](https://img.shields.io/badge/PostgreSQL-16.3-4169E1?style=flat&logo=postgresql)
![Tech Stack](https://img.shields.io/badge/Drizzle_ORM-0.30.10-FF6600?style=flat&logo=drizzle)
![Tech Stack](https://img.shields.io/badge/Neon-1.0.0-00E59B?style=flat&logo=neon)
![Tech Stack](https://img.shields.io/badge/TypeScript-5.4.5-3178C6?style=flat&logo=typescript)

A modern, high-performance podcast discovery app built using the `latest Next.js App Router and React 19`, with full server-side rendering (SSR), React Server Components (RSC), and a clean, scalable architecture.

## 🔗 `Live Demo`: fnjan-podcast.vercel.app

## 🚀 Features

- 🔍 `Full-text podcast search`
- 📱 `Fully mobile responsive UI`
- ⚡ `React Server Components + SSR`
- 🧱 `Feature-based architecture for scalability`
- 🧠 `Smart search input` with debounced API calls and URL sync
- 🗂️ Podcasts are `stored and cached in a serverless PostgreSQ`L database via `Drizzle ORM`

## 🛠️ Tech Stack

| Layer     | Tech                                                                                   |
| --------- | -------------------------------------------------------------------------------------- |
| Runtime   | [Bun v1.0](https://bun.sh)                                                             |
| Framework | [Next.js 15 App Router](https://nextjs.org/docs/app/building-your-application/routing) |
| Language  | TypeScript 5.7                                                                         |
| UI        | React 19, Tailwind CSS 4.0, [shadcn/ui](https://ui.shadcn.com)                         |
| ORM       | [Drizzle ORM](https://orm.drizzle.team)                                                |
| Database  | [PostgreSQL](https://www.postgresql.org) hosted on [Neon](https://neon.tech)           |

## 📦 Installation

Ensure you have [Bun](https://bun.sh/) and Node.js installed.

```bash
bun install       # install deps
bun run dev       # start dev server at http://localhost:3000
bun run build     # production build
```

## 📁 Project Architecture

```bash
app/
├── features/         # Feature-based modules
│   └── podcasts/     # Search + View logic
│       ├── components/  # UI components for this feature
│       ├── hooks/       # Custom logic (e.g., debounced search)
│       ├── views/       # Server/Client views
│       ├── services/    # API communication
│       └── utils.ts     # Helpers
│
├── components/       # Shared UI (with shadcn/ui)
├── db/               # Database config and schema
├── lib/              # Global utilities
└── api/              # Server routes (/api/search)

```

### Key Architectural Choices:

- `RSC + SSR:` Used React Server Components and streaming SSR wherever possible
- `Scalable Feature-Based Structure:` Makes it easy to extend and maintain
- `Debounced Controlled Inputs:` Smart SearchInput component syncs state with URL and API
- `Drizzle ORM:` Type-safe database access with full relational and SQL APIs

## 🌟 Highlights

- ⚛️ `Built using React 19 + App Router + RSC`
- 🚀 `Turbopack` for faster builds and HMR
- 🎨 `Tailwind + Shadcn` for beautiful, consistent UI
- 💾 `Serverless PostgreSQL (Neon)` with cache logic and deduplication
- 🧠 `Search input auto-focuses, debounces, syncs with URL, and calls API`
- Practical use of `TypeScript`, `custom hooks`, `URL query management`
- Performance-conscious coding with `debounced input + lazy API` fetching
- `Clean folder structure`, scalable and production-ready
