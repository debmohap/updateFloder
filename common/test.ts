import {test as base, expect} from '@playwright/test'
import {Booking} from '../pages/booking'

export type TestOptions = {
  bookingPage: Booking
}

const test = base.extend<TestOptions>({

    bookingPage: async ({page}, use) => {
    await use(new Booking(page))
  },
})
export {test, expect}
