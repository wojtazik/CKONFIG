import { SET_SELECTED_CAR } from './actionsType'
import { Dispatch, ReducerAction } from 'react'
import { getCarOption } from './carOptionActions'

export const getSelectedCar = (payload: string) => (dispatch: Dispatch<ReducerAction<any>>) => {
  dispatch(setSelectedCar(payload))
  dispatch(getCarOption(payload))
}

export const setSelectedCar = (payload: string) => {
  return {
    type: SET_SELECTED_CAR,
    payload: payload
  }
}
