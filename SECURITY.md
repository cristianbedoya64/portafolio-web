Security policy

Reporting a vulnerability
- If you discover a security vulnerability, please open a confidential issue or contact the maintainer via email.
- Do NOT include exploit details in public issues.

Dependencies
- The CI runs `npm run audit:security`. Address `critical` vulnerabilities immediately.

Secrets
- Do not commit `.env` or secrets. Use `.env.example` to document non-sensitive keys.

Third-party code
- Review major dependency upgrades for breaking changes and risk (especially libs that run in the browser like recharts or tsparticles).
