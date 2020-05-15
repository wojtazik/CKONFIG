import { IAllowedGearbox, ICarColor, ICarOption, IPossibleEngine } from '../../model/carOptionInterface'
import { SET_CAR_COLOR, SET_CAR_ENGINE, SET_CAR_GEARBOX, SET_CAR_OPTION } from './actionsType'
import { Dispatch, ReducerAction } from 'react'
import getSelectedCar from '../../helper/getData/getSelectedCar'
import { setError } from './errorActions'

export const getCarOption = (payload: string) => (dispatch: Dispatch<ReducerAction<any>>) => {
  getSelectedCar(payload)
    .then((carOption: ICarOption) => {
      dispatch(setCarOption(carOption))
    })
    .catch((error) => {
      dispatch(setError('problem with fetching car option data'))
      throw new Error(error)
    })
}

export const setCarOption = (payload: ICarOption) => {
  return {
    type: SET_CAR_OPTION,
    payload: payload
  }
}

export const setCarEngine = (payload: IPossibleEngine) => {
  return {
    type: SET_CAR_ENGINE,
    payload: payload
  }
}

export const setCarGearbox = (payload: IAllowedGearbox) => {
  return {
    type: SET_CAR_GEARBOX,
    payload: payload
  }
}

export const setCarColor = (payload: ICarColor) => {
  return {
    type: SET_CAR_COLOR,
    payload: payload
  }
}
