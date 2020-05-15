import { IPossibleCar } from '../../model/possibleCarInterface'
import { Dispatch, ReducerAction } from 'react'
import getPossibleCars from '../../helper/getData/getPossibleCars'
import { setError } from './errorActions'
import { ISetPossibleCars, SET_POSSIBLE_CARS } from './actionsType'
import { getSelectedCar } from './selectedCarActions'

export const setPossibleCars = (payload: IPossibleCar[]): ISetPossibleCars => {
  return {
    type: SET_POSSIBLE_CARS,
    payload: payload
  }
}

export const getPossibleCarsData = (): (dispatch: Dispatch<ReducerAction<any>>) => any => {
  return (dispatch: Dispatch<ReducerAction<any>>) => {
    getPossibleCars()
      .then((possibleCars: IPossibleCar[]) => {
        const selectedCarName = possibleCars[possibleCars.findIndex((possibleCar: IPossibleCar) => possibleCar.isSelected)].name
        dispatch(setPossibleCars(possibleCars))
        dispatch(getSelectedCar(selectedCarName))
      })
      .catch((error: any) => {
        dispatch(setError('something goes wrong'))
        throw new Error(error)
      })
  }
}
