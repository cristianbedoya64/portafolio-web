import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.js',
    globals: true,
    // Exclude Playwright E2E tests and node_modules so Vitest only runs project unit tests
    exclude: ['tests/e2e/**', 'node_modules/**'],
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
})
