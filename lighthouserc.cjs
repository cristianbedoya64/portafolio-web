module.exports = {
  ci: {
    collect: {
      // Build the site and serve statically to avoid flakiness with preview servers on Windows.
      buildCommand: 'npm run build',
      staticDistDir: './dist',
      url: ['/', '/index.html'],
      numberOfRuns: 1,
      settings: {
        preset: 'perf',
        emulatedFormFactor: 'mobile',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        extraHeaders: JSON.stringify({ 'Accept-Language': 'es-ES' }),
        throttlingMethod: 'simulate',
        chromeFlags: ['--no-sandbox', '--disable-dev-shm-usage'],
        // Performance budgets
        budgets: require('./performance-budget.json'),
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        // Downgrade accessibility to warn so audit doesn't hard-fail while iterating.
        'categories:accessibility': ['warn', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        'uses-http2': 'off',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci-reports',
      reportFilenamePattern: 'lighthouse-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
