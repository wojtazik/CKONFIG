import { IPossibleCar } from '../../model/possibleCarInterface'
import convertDefaultToSelected from '../convertDefaultToSelected'
import axios, { AxiosResponse } from 'axios'

const url = 'http://localhost:9000/api/possible-cars'

const getPossibleCars = () => {
  return axios.get(url)
    .then((res: AxiosResponse) => res.data)
    .then((res: IPossibleCar[]) => {
      return convertDefaultToSelected(res)
    })
}

export default getPossibleCars
