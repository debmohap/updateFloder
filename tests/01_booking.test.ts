// import {Booking} from '../pojo/Booking_pojo'
// import {test, expect} from '../common/test'
// import {faker} from '@faker-js/faker'
// const {chromium} = require('playwright')
// require('dotenv').config()
// const api_server = process.env.API_URL as string

// test.describe('Create new Bookinng, verify , delete E2E API', async () => {
//   const title = faker.lorem.words(1) + Math.floor(Math.random() * 100000)
//   let bookingId: number
//   const bookingData = Booking.generateBookingData()

//   test.beforeEach('Create new Booking', async ({bookingPage}) => {
//     const token = process.env.API_TOKEN
//     const response = await bookingPage.createNewBookingApi(JSON.stringify(bookingData, null, 2))
//     expect(response.status()).toEqual(200)
//     const data = await response.json()
//     bookingId = data['bookingid']
//     expect(data.booking.firstname).toContain(bookingData['firstname'])
//     expect(data.booking.lastname).toContain(bookingData['lastname'])
//     expect(data.booking.totalprice.toString()).toContain(bookingData['totalprice'].toString())
//     expect(data.booking.depositpaid).toBe(bookingData['depositpaid'])
//     expect(data.booking.additionalneeds).toContain(bookingData['additionalneeds'])
//   })
//   test('Get Booking details using the Booking Id', async ({bookingPage}) => {
//     const response = await bookingPage.getBookingDetils(bookingId)
//     expect(response.status()).toEqual(200)
//     const data = await response.json()
//     expect(data.firstname).toContain(bookingData['firstname'])
//     expect(data.lastname).toContain(bookingData['lastname'])
//     expect(data.totalprice.toString()).toContain(bookingData['totalprice'].toString())
//     expect(data.depositpaid).toBe(bookingData['depositpaid'])
//     expect(data.additionalneeds).toContain(bookingData['additionalneeds'])
//   })
//   test('Update all the booking details using the Booking Id', async ({bookingPage}) => {
//     const updateBookingData = Booking.generateBookingData()
//     const response = await bookingPage.updateBookingApi(
//       JSON.stringify(updateBookingData, null, 2),
//       bookingId
//     )
//     expect(response.status()).toEqual(200)
//     const data = await response.json()
//     expect(data.firstname).toContain(updateBookingData['firstname'])
//     expect(data.lastname).toContain(updateBookingData['lastname'])
//     expect(data.totalprice.toString()).toContain(updateBookingData['totalprice'].toString())
//     // expect(data.depositpaid).toBe(bookingData['depositpaid'])
//     expect(data.additionalneeds).toContain(updateBookingData['additionalneeds'])
//   })
//   test('Update the firstname and totalprice using the Patch request.', async ({bookingPage}) => {
//     const updateBookingData = Booking.generateBookingData()
//     const jsonString = JSON.stringify(updateBookingData, null, 2)
//     const parsedObject = JSON.parse(jsonString)
//     const desiredObject = {
//       firstname: parsedObject.firstname,
//       lastname: parsedObject.lastname,
//     }
//     const response = await bookingPage.partialUpdateBookingApi(desiredObject, bookingId)
//     expect(response.status()).toEqual(200)
//     const data = await response.json()
//     expect(data.firstname).toContain(updateBookingData['firstname'])
//     expect(data.lastname).toContain(updateBookingData['lastname'])
//   })
//   test('Delete the booking and assert the status code', async ({bookingPage}) => {
//     const deleteBooking = await bookingPage.deleteBooking(bookingId)
//     expect(deleteBooking.status()).toEqual(201)
//     const assertDeleteBooking = await bookingPage.deleteBooking(bookingId)
//     expect(assertDeleteBooking.status()).toEqual(405)
//   })
// })
