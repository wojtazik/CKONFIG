import carOptionFaker, { fakeColor, fakeEngine, fakeGearbox } from '../../helper/faker/carOptionFaker'
import { ICarOption } from '../../../src/model/carOptionInterface'
import convertCarOptionDefaults from '../../../src/helper/convertCarOptionDefaults'

describe('it converts car option defaults properties to selected', () => {
  test('should return properly converted object', () => {
    const fakeCarOption: ICarOption = carOptionFaker({
      possibleEngines: [
        {
          ...fakeEngine,
          isDefault: false,
          allowedGearbox: [
            {
              ...fakeGearbox,
              isDefault: false
            }
          ]
        }
      ],
      colors: [
        {
          ...fakeColor,
          isDefault: false
        }
      ]
    })

    const expectedCarOption: ICarOption = {
      _id: '1a2s3d4f',
      carName: 'TOYOTA X',
      price: 9385,
      customColorPrice: 100,
      possibleEngines: [
        {
          ...fakeEngine,
          isSelected: false,
          allowedGearbox: [
            {
              ...fakeGearbox,
              isSelected: false
            }
          ]
        }
      ],
      colors: [
        {
          ...fakeColor,
          isSelected: false
        }
      ]
    }

    expect(convertCarOptionDefaults(fakeCarOption)).toEqual(expectedCarOption)
  })
})
