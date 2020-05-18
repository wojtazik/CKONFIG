import axios from 'axios'
import possibleCarsFaker, { possibleCar } from '../../../helper/faker/possibleCarsFaker'
import { IPossibleCar } from '../../../../src/model/possibleCarInterface'
import getPossibleCars from '../../../../src/helper/getData/getPossibleCars'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('it makes api call and returns possible cars data with converted defaults to selected', () => {
  test('should return converted possible cars', async () => {
    const possibleCarsApiData: IPossibleCar[] = possibleCarsFaker([
      {
        ...possibleCar,
        isDefault: true
      }
    ])

    const expectedFunctionResult: IPossibleCar[] = possibleCarsFaker([
      {
        ...possibleCar,
        isDefault: undefined,
        isSelected: true
      }
    ])
    mockedAxios.get.mockResolvedValue({ data: possibleCarsApiData })

    const functionResult = await getPossibleCars()

    expect(axios.get).toHaveBeenCalled()
    expect(functionResult).toEqual(expectedFunctionResult)
  })
})
