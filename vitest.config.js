import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './src/tests/setupTests.js'),
    globals: true,
    // Exclude Playwright E2E tests and node_modules so Vitest only runs project unit tests
    exclude: ['tests/e2e/**', 'node_modules/**'],
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
})
