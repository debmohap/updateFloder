import {faker} from '@faker-js/faker'

export class Booking {
  firstname: string
  lastname: string
  totalprice: number
  depositpaid: boolean
  bookingdates: {checkin: string; checkout: string}
  additionalneeds: string

  constructor(
    firstname: string,
    lastname: string,
    totalprice: number,
    depositpaid: boolean,
    bookingdates: {checkin: string; checkout: string},
    additionalneeds: string
  ) {
    this.firstname = firstname
    this.lastname = lastname
    this.totalprice = totalprice
    this.depositpaid = depositpaid
    this.bookingdates = bookingdates
    this.additionalneeds = additionalneeds
  }

  // Generate fake booking data using Faker.js
  static generateBookingData(): Booking {
    return new Booking(
      faker.person.firstName(),
      faker.person.lastName(),
      400,
      faker.datatype.boolean(),
      {
        checkin: faker.date.future(1).toISOString().split('T')[0],
        checkout: faker.date.future(2).toISOString().split('T')[0],
      },
      faker.helpers.arrayElement(['Breakfast', 'Lunch', 'Dinner'])
    )
  }
}
