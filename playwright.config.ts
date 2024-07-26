import {defineConfig, devices} from '@playwright/test'
// import {dat} from '../tests/api'

require('dotenv').config()

export default defineConfig({
  testDir: 'tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', {outputFolder: 'Report'}]],
  use: {
    baseURL: process.env.URL,
    trace: 'on-first-retry',
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
