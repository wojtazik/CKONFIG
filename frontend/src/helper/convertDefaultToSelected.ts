import { omit, isArray } from 'lodash'
import { IPossibleCar } from '../model/possibleCarInterface'

export default (data: any) => {
  if (isArray(data)) {
    return data.reduce((acc: IPossibleCar[], current: IPossibleCar) => {
      const convertedCurrent = { ...current, isSelected: current.isDefault }

      return [...acc, omit(convertedCurrent, 'isDefault')]
    }, [])
  } else {
    const newObject = { ...data, isSelected: data.isDefault }
    return omit(newObject, 'isDefault')
  }
}
