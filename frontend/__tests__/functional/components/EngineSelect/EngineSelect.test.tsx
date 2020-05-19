import React from 'react'
import renderWithReduxAndTranslations from '../../../helper/renderWithReduxAndTranslations'
import { createStore } from 'redux'
import rootReducer from '../../../../src/store/reducers'
import { cleanup, fireEvent } from '@testing-library/react'
import { setCarOption } from '../../../../src/store/actions/carOptionActions'
import carOptionFaker, { fakeColor, fakeEngine } from '../../../helper/faker/carOptionFaker'
import EngineSelect from '../../../../src/components/EngineSelect/EngineSelect'

describe('functional tests for color select component', () => {
  let store: any

  beforeEach(() => {
    store = createStore(rootReducer)
  })
  afterEach(cleanup)

  test('should render component when is car option in state', () => {
    store.dispatch(setCarOption(carOptionFaker()))
    const { getByTestId } = renderWithReduxAndTranslations(<EngineSelect />, store)

    expect(getByTestId('engineSelect')).not.toBeNull()
  })
  test('should not  render component when is car option in state', () => {
    const { queryByTestId } = renderWithReduxAndTranslations(<EngineSelect />, store)

    expect(queryByTestId('engineSelect')).toBeNull()
  })

  test('should display proper engine data', () => {
    store.dispatch(setCarOption({
      ...carOptionFaker(),
      possibleEngines: [
        {
          ...fakeEngine,
          isSelected: true,
          displacementCC: 1999,
          horsePower: 180,
          _id: '1234'
        },
        {
          ...fakeEngine,
          isSelected: false,
          displacementCC: 2499,
          horsePower: 265,
          _id: '4321'
        }
      ]
    }))
    const { queryByTestId } = renderWithReduxAndTranslations(<EngineSelect />, store)

    expect(queryByTestId('engineSelect').querySelectorAll('.car-configuration__section-item')[0].textContent).toContain('2.0L 180BHP')
    expect(queryByTestId('engineSelect').querySelectorAll('.car-configuration__section-item')[1].textContent).toContain('2.5L 265BHP')
  })

  test('should set isSelected css class properly', () => {
    store.dispatch(setCarOption({
      ...carOptionFaker(),
      possibleEngines: [
        {
          ...fakeEngine,
          isSelected: true,
          displacementCC: 1999,
          horsePower: 180,
          _id: '1234'
        },
        {
          ...fakeEngine,
          isSelected: false,
          displacementCC: 2499,
          horsePower: 265,
          _id: '4321'
        }
      ]
    }))
    const { queryByTestId } = renderWithReduxAndTranslations(<EngineSelect />, store)

    expect(queryByTestId('engineSelect').querySelectorAll('.car-configuration__section-item')[0].classList.contains('car-configuration__section-item--selected')).toBeTruthy()
    expect(queryByTestId('engineSelect').querySelectorAll('.car-configuration__section-item')[1].classList.contains('car-configuration__section-item--selected')).toBeFalsy()

    fireEvent.click(queryByTestId('engineSelect').querySelectorAll('.car-configuration__section-item')[1])
    expect(queryByTestId('engineSelect').querySelectorAll('.car-configuration__section-item')[0].classList.contains('car-configuration__section-item--selected')).toBeFalsy()
    expect(queryByTestId('engineSelect').querySelectorAll('.car-configuration__section-item')[1].classList.contains('car-configuration__section-item--selected')).toBeTruthy()
  })
})
