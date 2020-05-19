import axios from 'axios'
import getSelectedCar from '../../../../src/helper/getData/getSelectedCar'
import carOptionFaker from '../../../helper/faker/carOptionFaker'
import { ICarOption } from '../../../../src/model/carOptionInterface'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('it makes api call and returns possible cars data with converted defaults to selected', () => {
  test('should return converted possible cars', async () => {
    const carOptionApiData: ICarOption = carOptionFaker({
      isDefault: true,
      possibleEngines: [
        {
          _id: '1a2s3d4ffsd',
          horsePower: 150,
          displacementCC: 1999,
          isDefault: true,
          price: 678,
          allowedGearbox: [
            {
              _id: '1a2s3d4faaasd',
              name: 'manual',
              isDefault: true,
              price: 0
            },
            {
              _id: '1a2s3d4fsfdsg',
              name: 'automatic',
              isDefault: false,
              price: 100
            }
          ]
        },
        {
          _id: '1a2s3d4fa',
          horsePower: 200,
          displacementCC: 2499,
          isDefault: true,
          price: 678,
          allowedGearbox: [
            {
              _id: '1a2s3d4fsdfb',
              name: 'automatic',
              isDefault: true,
              price: 0
            }
          ]
        }
      ],
      colors: [
        {
          _id: '125498124ada',
          colorCode: 'blue',
          isDefault: true,
          price: 78
        },
        {
          _id: 'ad23c12ccv1',
          colorCode: 'red',
          isDefault: false,
          price: 111
        }
      ]
    })

    const expectedFunctionResult: ICarOption = carOptionFaker({
      isSelected: true
    })
    mockedAxios.get.mockResolvedValue({ data: carOptionApiData })

    const functionResult = await getSelectedCar('name')

    expect(axios.get).toHaveBeenCalled()
    expect(functionResult).toEqual(expectedFunctionResult)
  })
})
