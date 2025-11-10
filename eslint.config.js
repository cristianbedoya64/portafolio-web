import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  // Node / config files (allow require/module/process)
  {
    files: ['playwright.config.js', '.eslintrc.js', 'vite.config.js', 'postcss.config.js', 'tests/e2e/**'],
    languageOptions: {
      globals: globals.node,
      parserOptions: { sourceType: 'module', ecmaVersion: 'latest' },
    },
    rules: {},
  },
  // Test files: enable Vitest globals so describe/test/expect are recognised
  {
    files: ['**/*.test.*', 'tests/**'],
    languageOptions: {
      globals: globals.vitest || { describe: true, test: true, expect: true, beforeEach: true, afterEach: true },
      parserOptions: { ecmaVersion: 'latest', ecmaFeatures: { jsx: true } },
    },
    rules: {
      'no-empty': ['error', { allowEmptyCatch: true }],
    },
  },
])
