import { IPossibleCar } from '../../../src/model/possibleCarInterface'

const defaults: IPossibleCar[] = [
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

export const possibleCar: IPossibleCar = {
  _id: '1m91d3',
  name: 'SUPRA AWD',
  isDefault: true
}

export default (customData?: any) => {
  return customData || defaults
}
