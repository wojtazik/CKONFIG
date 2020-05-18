import { ICarOption } from '../../../../src/model/carOptionInterface'
import carOptionFaker from '../../../helper/faker/carOptionFaker'

describe('it performs tests on car option interface', () => {
  test('should return default faker data', () => {
    const expectedOptionFaker: ICarOption = {
      _id: '1a2s3d4f',
      carName: 'TOYOTA X',
      price: 9385,
      customColorPrice: 100,
      possibleEngines: [
        {
          _id: '1a2s3d4ffsd',
          horsePower: 150,
          displacementCC: 1999,
          isSelected: true,
          price: 678,
          allowedGearbox: [
            {
              _id: '1a2s3d4faaasd',
              name: 'manual',
              isSelected: true,
              price: 0
            },
            {
              _id: '1a2s3d4fsfdsg',
              name: 'automatic',
              isSelected: false,
              price: 100
            }
          ]
        },
        {
          _id: '1a2s3d4fa',
          horsePower: 200,
          displacementCC: 2499,
          isSelected: true,
          price: 678,
          allowedGearbox: [
            {
              _id: '1a2s3d4fsdfb',
              name: 'automatic',
              isSelected: true,
              price: 0
            }
          ]
        }
      ],
      colors: [
        {
          _id: '125498124ada',
          colorCode: 'blue',
          isSelected: true,
          price: 78
        },
        {
          _id: 'ad23c12ccv1',
          colorCode: 'red',
          isSelected: false,
          price: 111
        }
      ]
    }

    expect(carOptionFaker()).toEqual(expectedOptionFaker)
  })

  test('should overwrite faker defaults', () => {
    const customFakerData = {
      _id: '12d1d2',
      carName: 'Tadasdas',
      price: 12414,
      customColorPrice: 1111,
      possibleEngines: [
        {
          _id: 'd124d1',
          horsePower: 123,
          displacementCC: 9485,
          isSelected: false,
          price: 11213,
          allowedGearbox: [
            {
              _id: 'asddadas',
              name: 'dasd',
              isSelected: true,
              price: 0
            }
          ]
        }
      ],
      colors: [
        {
          _id: '12s1s',
          colorCode: 'pinkfloyd',
          isSelected: true,
          price: 1331
        }
      ]
    }

    expect(carOptionFaker(customFakerData)).toEqual(customFakerData)
  })
})
