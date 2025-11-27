// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   reporter: [
//     ['list'], // Console summary
//     ['html', { outputFolder: 'playwright-report', open: 'never' }], // HTML report
//     ['json', { outputFile: 'test-results/report.json' }], // JSON report
//   ],
// });

import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Global test settings
  use: {
    /**
     * baseURL
     * -------
     * This is the default URL Playwright will prefix to any relative path.
     * Example: page.goto('/') → https://www.saucedemo.com/
     */
    baseURL: 'https://www.saucedemo.com/',

    // Optional: Run browser visibly (set to true if you want UI)
    headless: true,
  },

  // Test result reporters configuration
  reporter: [
    ['list'], // Displays console test summary
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // Generates HTML report
    ['json', { outputFile: 'test-results/report.json' }], // JSON report for CI/analysis tools
  ],
});
