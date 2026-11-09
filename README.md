# Software Engineering Portfolio

## Run locally

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the homepage.

## Project structure

| Folder | Purpose |
| --- | --- |
| Project root | Holds the README, package manifest and lockfile, and tool configuration. |
| `src/` | Keeps application code together and separate from project setup. |
| `src/app/` | Holds Next.js routes and shared layout files. `page.tsx` renders `/`, `layout.tsx` wraps each page, and `globals.css` loads Tailwind. |

When the portfolio needs a `/projects` route, add `src/app/projects/page.tsx`. Shared UI can live in `src/components/`, typed project entries in `src/data/`, and public assets in the root-level `public/` folder.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```
