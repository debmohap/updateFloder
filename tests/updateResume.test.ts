import {test, expect} from '../common/test'
import fs from 'fs'
import {chromium, Browser, Page} from 'playwright'

require('dotenv').config()

test.describe('UPDATE RESUME', () => {
  test('Update resume with saved cookies', async () => {
    const browser: Browser = await chromium.launch({headless: false})
    const context = await browser.newContext()
    const cookies = JSON.parse(fs.readFileSync('./tests/test-data/cookies.json', 'utf-8'))
    await context.addCookies(cookies)
    const page: Page = await context.newPage()
    try {
      await page.goto('https://www.naukri.com/mnjuser/profile?id=&altresid')
      await page.fill('#usernameField', 'visitdeb09@gmail.com')
      await page.fill('#passwordField', 'debajyoti@1')
      await page.click('button[type="submit"]')
      // await page.waitForNavigation()
      await page.waitForTimeout(3000)
      await page.goto('https://www.naukri.com/mnjuser/profile?id=&altresid')
      // await page.waitForTimeout(3000)
      const fileChooserPromise = page.waitForEvent('filechooser')
      await page.click('input[value="Update resume"]')
      const fileChooser = await fileChooserPromise
      await fileChooser.setFiles('./tests/test-data/Debajyoti_Mohapatra_SDET_Resume.pdf')
      await page.click('button[type="submit"]')
    } catch (error) {
      console.error('Error updating resume:', error)
      throw error // Ensure the test fails if there's an error
    } finally {
      await browser.close()
    }
  })
})
