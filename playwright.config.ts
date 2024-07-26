import {defineConfig, devices} from '@playwright/test'
require('dotenv').config()

export default defineConfig({
  testDir: 'tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  // reporter: [['list'], ['html']],
  use: {
    baseURL: process.env.URL,
    video: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
  ],
  globalSetup: require.resolve('./global-setup'),
})
