import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../../src/store/reducers/index'
import { cleanup } from '@testing-library/react'
import CarConfiguration from '../../../../src/components/CarConfiguration/CarConfiguration'
import renderWithReduxAndTranslations from '../../../helper/renderWithReduxAndTranslations'
import appConfig from '../../../../src/config/config'
import { setPossibleCars } from '../../../../src/store/actions/possibleCarsActions'
import possibleCarsFaker from '../../../helper/faker/possibleCarsFaker'
import { setCarOption } from '../../../../src/store/actions/carOptionActions'
import carOptionFaker from '../../../helper/faker/carOptionFaker'

describe('functional tests for car configuration component', () => {
  let store: any

  beforeEach(() => {
    store = createStore(rootReducer)
  })
  afterEach(cleanup)

  test('should render component', () => {
    const { getByTestId } = renderWithReduxAndTranslations(<CarConfiguration />, store)

    expect(getByTestId('carConfiguration')).not.toBeNull()
  })

  test('should child component have proper text', () => {
    const { getByTestId } = renderWithReduxAndTranslations(<CarConfiguration />, store)

    expect(getByTestId('carConfiguration').querySelector('.car-configuration__name').textContent).toContain(appConfig.appName)
    expect(getByTestId('carConfiguration').querySelector('.car-configuration__name').textContent).toContain(appConfig.appVersion)
  })

  test('should render proper children count', () => {
    store.dispatch(setPossibleCars(possibleCarsFaker()))
    store.dispatch(setCarOption(carOptionFaker()))
    const { getByTestId } = renderWithReduxAndTranslations(<CarConfiguration />, store)

    expect(getByTestId('carConfiguration').children.length).toEqual(6)
  })

  test('should render proper children count when is no car option in state', () => {
    store.dispatch(setPossibleCars(possibleCarsFaker()))
    const { getByTestId } = renderWithReduxAndTranslations(<CarConfiguration />, store)

    expect(getByTestId('carConfiguration').children.length).toEqual(3)
  })

  test('should render proper children count when is no possible cars in state', () => {
    store.dispatch(setCarOption(carOptionFaker()))
    const { getByTestId } = renderWithReduxAndTranslations(<CarConfiguration />, store)

    expect(getByTestId('carConfiguration').children.length).toEqual(5)
  })
})
