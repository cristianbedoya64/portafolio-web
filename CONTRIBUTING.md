Contributing

Thanks for contributing! Follow these guidelines to keep the repo consistent and reviewable.

1. Branches and commits
- Use feature branches: `feature/<short-description>` or `fix/<short-description>`.
- Write meaningful commit messages: `type(scope): short summary` (e.g. `feat(navbar): add language toggle`).

2. PR process
- Open a PR against `main`. Include a short description, testing steps and screenshots when relevant.
- Link related issues and set reviewers.

3. Code style
- Run lint and format before committing: `npm run lint` and `npm run format`.
- Tests must pass locally: `npm run test` and `npm run e2e` when applicable.

4. Testing
- Add unit tests for logic and components (Vitest + Testing Library).
- Add E2E tests for critical flows (Playwright).

5. Documentation
- Update relevant README when adding features (components, sections, api, scripts).

6. Security
- Do not commit secrets or `.env` values. Use `.env.example` for documentation.
