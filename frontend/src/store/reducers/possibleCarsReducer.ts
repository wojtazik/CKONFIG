import { IPossibleCar } from '../../model/possibleCarInterface'
import { ISetPossibleCars, SET_POSSIBLE_CARS } from '../actions/actionsType'

export function possibleCarsReducer (state: IPossibleCar[] = [], action: ISetPossibleCars) {
  switch (action.type) {
    case SET_POSSIBLE_CARS:
      state = action.payload
      return state
    default:
      return state
  }
}
