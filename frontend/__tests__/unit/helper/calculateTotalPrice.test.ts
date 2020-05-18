import calculateTotalPrice from '../../../src/helper/calculateTotalPrice'
import carOptionFaker, { fakeColor, fakeEngine, fakeGearbox } from '../../helper/faker/carOptionFaker'

describe('unit test for calculate total price function', () => {
  test('id should return calculated total price', () => {
    const carPrice = 200
    const enginePrice = 100
    const gearboxPrice = 100
    const colorPrice = 100
    const expectedTotalPrice = 500

    const fakeCarOption: any = {
      price: carPrice,
      possibleEngines: [
        {
          ...fakeEngine,
          price: enginePrice,
          allowedGearbox: [
            {
              ...fakeGearbox,
              price: gearboxPrice
            }
          ]
        }
      ],
      colors: [
        {
          ...fakeColor,
          price: colorPrice
        }
      ]
    }

    expect(calculateTotalPrice(carOptionFaker(fakeCarOption))).toEqual(expectedTotalPrice)
  })
})
