import {
  getCarOption,
  setCarColor,
  setCarEngine,
  setCarGearbox,
  setCarOption
} from '../../../../src/store/actions/carOptionActions'
import carOptionFaker, { fakeColor, fakeEngine, fakeGearbox } from '../../../helper/faker/carOptionFaker'
import {
  SET_CAR_COLOR,
  SET_CAR_ENGINE,
  SET_CAR_GEARBOX,
  SET_CAR_OPTION
} from '../../../../src/store/actions/actionsType'

describe('unit test for car option actions', () => {
  test('should return proper action for setCarColor', () => {
    const payload = fakeColor
    const action = setCarColor(payload)

    expect({ type: SET_CAR_COLOR, payload: payload }).toMatchObject(action)
  })

  test('should return proper action for setCarGearbox', () => {
    const payload = fakeGearbox
    const action = setCarGearbox(payload)

    expect({ type: SET_CAR_GEARBOX, payload: payload }).toMatchObject(action)
  })

  test('should return proper action for setCarEngine', () => {
    const payload = fakeEngine
    const action = setCarEngine(payload)

    expect({ type: SET_CAR_ENGINE, payload: payload }).toMatchObject(action)
  })

  test('should return proper action for setCarOption', () => {
    const payload = carOptionFaker()
    const action = setCarOption(payload)

    expect({ type: SET_CAR_OPTION, payload: payload }).toMatchObject(action)
  })
})
