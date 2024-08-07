import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,

  /* CI Specific Settings */

  /* Fail the build on CI if any test.only flags exist. */
  forbidOnly: !!process.env.CI,

  /* Retries happen only in a CI context. */
  retries: process.env.CI ? 2 : 0,

  /* CI tests are not running parallel. */
  workers: process.env.CI ? 1 : undefined,

  reporter: "html",

  /* Shared settings for all projects. */
  use: {
    baseURL: "https://testerstories.com",

    trace: "on-first-retry",
  },

  projects: [
    {
      name: "Ludic Tests",
      testDir: "./tests/ludic",
      testMatch: "**/*.spec.ts",
      use: {
        baseURL: "https://testerstories.com",
      },
    },
    {
      name: "Playground Tests",
      testDir: "./tests/playground",
      testMatch: "**/*.spec.ts",
      use: {
        baseURL: "https://testerstories.com",
      },
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
