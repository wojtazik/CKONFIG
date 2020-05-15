import axios, { AxiosResponse } from 'axios'
import { ICarOption } from '../../model/carOptionInterface'
import convertCarOptionDefaults from '../convertCarOptionDefaults'

const url = 'http://localhost:9000/api/cars/'

const getSelectedCar = (carName: string) => {
  return axios.get(url + carName)
    .then((res: AxiosResponse) => res.data)
    .then((res: ICarOption) => {
      return convertCarOptionDefaults(res)
    })
}

export default getSelectedCar
