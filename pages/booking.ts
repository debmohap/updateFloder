import {Locator, Page, request} from '@playwright/test'
require('dotenv').config()
const url = process.env.API_URL as string
const user = process.env.USER as string
const pass = process.env.PASS as string

export class Booking {
  readonly page: Page
  //   readonly locator: Location

  constructor(page: Page) {
    this.page = page
  }

  // async getAuthTokenApi() {
  //   const apiContext = await request.newContext()
  //   const response = await apiContext.post(`${url}/auth`, {
  //     data: {
  //       username: user,
  //       password: pass,
  //     },
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   const responseBody = await response.json()
  //   return responseBody.token
  // }
  async createNewBookingApi(bookingData: any) {
    const apiContext = await request.newContext()
    const response = await apiContext.post(`${url}/booking`, {
      data: bookingData,
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  }

  async updateBookingApi(bookingData: any, bookingID: number) {
    const apiContext = await request.newContext()
    const response = await apiContext.put(`${url}/booking/${bookingID}`, {
      data: bookingData,
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: 'token=' + process.env.API_TOKEN,
      },
    })
    return response
  }
  async partialUpdateBookingApi(bookingData: any, bookingID: number) {
    const apiContext = await request.newContext()
    const response = await apiContext.patch(`${url}/booking/${bookingID}`, {
      data: bookingData,
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Cookie: 'token=' + process.env.API_TOKEN,
      },
    })
    return response
  }

  async getBookingDetils(bookingID: number) {
    const apiContext = await request.newContext()
    const response = await apiContext.get(`${url}/booking/${bookingID}`, {
      failOnStatusCode: false,
    })
    return response
  }

  async deleteBooking(bookingID: number) {
    const apiContext = await request.newContext()
    const response = await apiContext.delete(`${url}/booking/${bookingID}`, {
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'token=' + process.env.API_TOKEN,
      },
    })
    return response
  }
}
