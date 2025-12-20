Project documentation index

This file is the documentation index for non-code artifacts. It points to architecture diagrams and ADRs present in the repository.

Files of interest:
- `architecture.mmd` — Mermaid architecture diagram (root). Render with Mermaid preview or mermaid CLI.
- `docs-adr-0001-vite-react-architecture.md` — ADR: Vite + React architecture.
- `docs-adr-0002-performance-budgets.md` — ADR: Performance budgets in CI.
- `docs-adr-0003-i18n-language-context.md` — ADR: i18n strategy.
- `docs-adr-0004-lazy-loading-pattern.md` — ADR: lazy loading pattern.
- `docs-adr-0005-observability.md` — ADR: Plausible vs self-host.
- `docs-adr-0006-ci-infra.md` — ADR: CI infrastructure (this file).

Rendering diagrams
- To render `architecture.mmd` use VSCode Mermaid Preview extension or run `npx mmdc -i architecture.mmd -o architecture.png` (install mermaid.cli globally or as a devDependency).

Guidance
- ADRs follow the simple template in `docs-adr-*`. Add new ADRs as `docs-adr-00x-*.md` when making architectural decisions.
