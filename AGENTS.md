# Repository Guidelines

Use these guidelines when contributing to the React 19 + Vite + Tailwind site.

## Project Structure & Module Organization
- `App.tsx` wires the layout, HashRouter routes, and shared providers.
- `pages/` holds route screens; colocate page-only assets beside each page.
- `components/` stores reusable UI such as `Header`, `Footer`, `ThemeSwitcher`.
- `context/` contains `LanguageContext` and `ThemeContext`; extend them rather than creating new globals.
- `constants/content.ts` centralizes multilingual copy aligned with types in `types.ts`.
- `metadata.json` maintains shared site metadata referenced across pages.

## Build, Test, and Development Commands
- `npm install` installs dependencies after editing `package.json` or `vite.config.ts`.
- `npm run dev` starts the Vite dev server with hot reload at `http://localhost:5173`.
- `npm run build` generates the production bundle in `dist/`.
- `npm run preview` serves `dist/` locally for smoke-testing the compiled app.

## Coding Style & Naming Conventions
- Favor TypeScript, functional React components, and hooks; type shared data via `types.ts`.
- Use 2-space indentation, single quotes, and include trailing commas when practical.
- Keep components and filenames in `PascalCase`, local helpers in `camelCase`.
- Style with Tailwind utility classes from the inline config in `index.html`; maintain semantic HTML and ARIA helpers.

## Testing Guidelines
- No automated tests ship today; manually verify flows in light/dark themes and both languages.
- When adding tests, adopt Vitest + React Testing Library under `__tests__/` and expose an `npm run test` script.
- Name specs `*.test.tsx` and note coverage expectations in the PR description.

## Commit & Pull Request Guidelines
- History mixes plain titles and Conventional Commits; prefer the latter, e.g. `feat: add services case study`.
- Group related changes per commit and keep the subject under 72 characters.
- Pull requests should describe scope, note manual QA, and include before/after screenshots for UI work.
- Link relevant issues and flag breaking changes or content migrations explicitly.

## Security & Configuration Tips
- Hash-based routing means new routes must be added to both `App.tsx` and `Header.tsx` navigation.
- Tailwind tweaks live in the inline config inside `index.html`; keep color tokens in sync with translator notes.
- Never store secrets in the repo; rely on deployment configuration for environment-specific data.
