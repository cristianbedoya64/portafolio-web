API directory README

Purpose
- Centralize integrations with external services (trendsService, other API wrappers).

Guidelines
- Keep network logic isolated from UI; return normalized data and include `isFallback` flags when appropriate.
- Use AbortController for cancellable fetches and expose signal support in functions.

Testing
- Use recorded fixtures or mock `fetch` to make tests deterministic.

Adding a new service
1. Create `src/api/myService.js` exporting functions that accept `{ signal }`.
2. Document input/output shapes and fallback strategy in this README.
