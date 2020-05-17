import {
  ISetCarColor,
  ISetCarEngine, ISetCarGearbox,
  ISetCarOption,
  ISetCarProperties, SET_CAR_COLOR,
  SET_CAR_ENGINE,
  SET_CAR_GEARBOX,
  SET_CAR_OPTION
} from '../actions/actionsType'
import { IAllowedGearbox, ICarColor, ICarOption, IPossibleEngine } from '../../model/carOptionInterface'
import { cloneDeep } from 'lodash'

export function carOptionReducer (state: ICarOption = null, action: ISetCarProperties) {
  switch (action.type) {
    case SET_CAR_OPTION: {
      state = (<ISetCarOption>action).payload
      return state
    }
    case SET_CAR_ENGINE: {
      const newState = cloneDeep(state)
      newState.possibleEngines = newState.possibleEngines.reduce((engines: IPossibleEngine[], engine: IPossibleEngine) => {
        const selectedEngineData = (<ISetCarEngine>action).payload.displacementCC + (<ISetCarEngine>action).payload.horsePower
        const engineData = engine.displacementCC + engine.horsePower

        return [...engines, {
          ...engine,
          isSelected: engineData === selectedEngineData
        }]
      }, [])

      return newState
    }
    case SET_CAR_GEARBOX: {
      const newStateOption = cloneDeep(state)

      return {
        ...newStateOption,
        possibleEngines: newStateOption.possibleEngines.reduce((engines: IPossibleEngine[], engine: IPossibleEngine) => {
          return [...engines, {
            ...engine,
            allowedGearbox: !engine.isSelected ? engine.allowedGearbox : engine.allowedGearbox.reduce((gearboxes: IAllowedGearbox[], gearbox: IAllowedGearbox) => {
              return [...gearboxes, {
                ...gearbox,
                isSelected: gearbox.name === (<ISetCarGearbox>action).payload.name
              }]
            }, [])
          }]
        }, [])
      }
    }
    case SET_CAR_COLOR: {
      const newCarState = cloneDeep(state)

      if (newCarState.colors.find((color: ICarColor) => color.colorCode === (<ISetCarColor>action).payload.colorCode)) {
        return {
          ...newCarState,
          colors: newCarState.colors.reduce((colors: ICarColor[], color: ICarColor) => {
            return [
              ...colors,
              {
                ...color,
                isSelected: color.colorCode === (<ISetCarColor>action).payload.colorCode
              }
            ]
          }, [])
        }
      } else {
        return {
          ...newCarState,
          colors: [
            ...newCarState.colors.map((color: ICarColor) => ({ ...color, isSelected: false })),
            {
              colorCode: (<ISetCarColor>action).payload.colorCode,
              isSelected: true,
              price: (<ISetCarColor>action).payload.price,
              _id: (<ISetCarColor>action).payload._id || null
            }
          ]
        }
      }
    }
    default: {
      return state
    }
  }
}
