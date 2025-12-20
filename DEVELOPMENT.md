Local development runbook

Quick setup
1. Node 20+ recommended. Use `nvm` or similar to pin the version.
2. `npm ci` to install reproducible deps.
3. Copy `.env.example` to `.env` and fill optional fields.
4. `npm run dev` then open http://localhost:5173

Common commands
- `npm run lint` — run ESLint
- `npm run test` — run Vitest unit tests
- `npm run e2e` — run Playwright tests (dev server auto-start)
- `npm run build` — create production `dist/`
- `npm run preview` — preview `dist/`
- `npm run optimize:images` — compress images in `public/` and `src/assets`

Troubleshooting
- Sharp install issues on Windows: install Visual C++ Build Tools or use Node LTS. See scripts README.
- If Playwright fails, ensure no other process is using ports 5173/4173 and Chrome is available in PATH for LHCI.

Contact
- For repo-level questions, open an issue with the template `Feature request` or `Bug report`.
