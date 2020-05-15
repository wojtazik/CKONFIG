import { ISetSelectedCar, SET_SELECTED_CAR } from '../actions/actionsType'

export function selectCarReducer (state: string = null, action: ISetSelectedCar): string {
  switch (action.type) {
    case SET_SELECTED_CAR:
      state = action.payload
      return state
    default:
      return state
  }
}
