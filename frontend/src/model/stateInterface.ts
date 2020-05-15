import { IPossibleCar } from './possibleCarInterface'
import { ICarOption } from './carOptionInterface'

export interface IState {
  possibleCarsState: IPossibleCar[]
  carOptionState: ICarOption
  selectedCarState: string,
  errorState: string
}
