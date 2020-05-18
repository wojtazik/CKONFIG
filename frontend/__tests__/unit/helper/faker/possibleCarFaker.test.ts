import { IPossibleCar } from '../../../../src/model/possibleCarInterface'
import possibleCarsFaker from '../../../helper/faker/possibleCarsFaker'

describe('unit test for possible car faker', () => {
  test('should return default fake data', () => {
    const expectedData: IPossibleCar[] = [
      {
        _id: '1m91d3',
        name: 'SUPRA AWD',
        isDefault: true
      },
      {
        _id: '1m91d123',
        name: 'SUPRA RWD',
        isDefault: false
      }
    ]

    expect(possibleCarsFaker()).toEqual(expectedData)
  })

  test('should overwrite defaults', () => {
    const nonDefaultsData: IPossibleCar[] = [
      {
        _id: '1923d',
        name: 'GT GT',
        isDefault: false
      }
    ]

    expect(possibleCarsFaker(nonDefaultsData)).toEqual(nonDefaultsData)
  })
})
