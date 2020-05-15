import { IPossibleCar } from '../../model/possibleCarInterface'
import { IAllowedGearbox, ICarColor, ICarOption, IPossibleEngine } from '../../model/carOptionInterface'

export interface ISetPossibleCars {
  type: string,
  payload: IPossibleCar[]
}

export interface ISetSelectedCar {
  type: string,
  payload: string
}

export interface ISetCarOption {
  type: string,
  payload: ICarOption
}

export interface ISetCarEngine {
  type: string,
  payload: IPossibleEngine
}

export interface ISetCarGearbox {
  type: string,
  payload: IAllowedGearbox
}

export interface ISetCarColor {
  type: string,
  payload: ICarColor
}

export interface ISetCarPrice {
  type: string,
  payload: ICarOption
}

export interface ISetError {
  type: string,
  payload: string
}

export type ISetCarProperties = ISetCarOption | ISetCarEngine | ISetCarGearbox | ISetCarColor | ISetCarPrice

export const SET_POSSIBLE_CARS = 'SET_POSSIBLE_CARS'
export const SET_SELECTED_CAR = 'SET_SELECTED_CAR'

export const SET_ERROR = 'SET_ERROR'

export const SET_CAR_OPTION = 'SET_CAR_OPTION'
export const SET_CAR_ENGINE = 'SET_CAR_ENGINE'
export const SET_CAR_GEARBOX = 'SET_CAR_GEARBOX'
export const SET_CAR_COLOR = 'SET_CAR_COLOR'
export const SET_CAR_PRICE = 'SET_CAR_COLOR'
