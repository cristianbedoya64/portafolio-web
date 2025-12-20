Title: Centralized i18n with LanguageContext
Date: 2025-12-20T19:40:58Z
Status: Accepted

Context
The app must be bilingual (ES/EN) and translations should be accessible to all components while preserving serverless/static hosting.

Decision
Store translations in `src/i18n/translations.js` and expose `LanguageProvider` + `useLanguage()` context to consumers. Persist the selected language in `localStorage`.

Consequences
- Simple, dependency-free i18n suitable for small static sites.
- Adding more languages requires updating a single translations file and corresponding READMEs.
- Runtime translation switching is supported without extra routing.

Rationale
A lightweight context approach reduces complexity vs. full i18n libraries while fulfilling product needs.

Signed-off-by: Cristian Bedoya
