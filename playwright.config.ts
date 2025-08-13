import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'], // Console summary
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // HTML report
    ['json', { outputFile: 'test-results/report.json' }], // JSON report
  ],
});
