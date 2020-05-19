import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../../src/store/reducers/index'
import { cleanup } from '@testing-library/react'
import renderWithReduxAndTranslations from '../../../helper/renderWithReduxAndTranslations'
import CarSummary from '../../../../src/components/CarSummary/CarSummary'
import { setCarOption } from '../../../../src/store/actions/carOptionActions'
import carOptionFaker from '../../../helper/faker/carOptionFaker'

describe('functional tests for car configuration component', () => {
  let store: any

  beforeEach(() => {
    store = createStore(rootReducer)
  })
  afterEach(cleanup)

  test('should render component', () => {
    const { getByTestId } = renderWithReduxAndTranslations(<CarSummary />, store)

    expect(getByTestId('carSummary')).not.toBeNull()
  })

  test('should have proper text', () => {
    const { getByTestId } = renderWithReduxAndTranslations(<CarSummary />, store)

    expect(getByTestId('carSummary').querySelector('.summary__title').textContent).toContain('summary.text')
  })

  test('should have proper childrens count with setted state', () => {
    store.dispatch(setCarOption(carOptionFaker()))
    const { getByTestId } = renderWithReduxAndTranslations(<CarSummary />, store)

    expect(getByTestId('carSummary').children.length).toEqual(3)
  })

  test('should have proper childrens count without setted state', () => {
    const { getByTestId } = renderWithReduxAndTranslations(<CarSummary />, store)

    expect(getByTestId('carSummary').children.length).toEqual(1)
  })
})
