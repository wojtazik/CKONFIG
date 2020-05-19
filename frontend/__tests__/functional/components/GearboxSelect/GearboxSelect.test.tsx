import React from 'react'
import renderWithReduxAndTranslations from '../../../helper/renderWithReduxAndTranslations'
import { createStore } from 'redux'
import rootReducer from '../../../../src/store/reducers'
import { cleanup, fireEvent } from '@testing-library/react'
import { setCarOption } from '../../../../src/store/actions/carOptionActions'
import carOptionFaker, { fakeEngine, fakeGearbox } from '../../../helper/faker/carOptionFaker'
import GearboxSelect from '../../../../src/components/GearboxSelect/GearboxSelect'

describe('functional tests for color select component', () => {
  let store: any

  beforeEach(() => {
    store = createStore(rootReducer)
  })
  afterEach(cleanup)

  test('should render component when is car option in state', () => {
    store.dispatch(setCarOption(carOptionFaker()))
    const { getByTestId } = renderWithReduxAndTranslations(<GearboxSelect />, store)

    expect(getByTestId('gearboxSelect')).not.toBeNull()
  })
  test('should not  render component when is car option in state', () => {
    const { queryByTestId } = renderWithReduxAndTranslations(<GearboxSelect />, store)

    expect(queryByTestId('gearboxSelect')).toBeNull()
  })

  test('should display proper gearbox data', () => {
    store.dispatch(setCarOption({
      ...carOptionFaker(),
      possibleEngines: [
        {
          ...fakeEngine,
          isSelected: true,
          displacementCC: 1999,
          horsePower: 180,
          allowedGearbox: [
            {
              ...fakeGearbox,
              name: 'manual',
              _id: '1234'
            },
            {
              ...fakeGearbox,
              name: 'automatic',
              _id: '4321'
            }
          ],
          _id: '1234'
        },
        {
          ...fakeEngine,
          isSelected: false,
          displacementCC: 2499,
          horsePower: 265,
          _id: '4321',
          allowedGearbox: [
            {
              ...fakeGearbox,
              name: 'other',
              _id: '1234'
            },
            {
              ...fakeGearbox,
              name: 'other2',
              _id: '4321'
            }
          ]
        }
      ]
    }))
    const { queryByTestId } = renderWithReduxAndTranslations(<GearboxSelect />, store)

    expect(queryByTestId('gearboxSelect').querySelectorAll('.car-configuration__section-item')[0].textContent).toContain('manual')
    expect(queryByTestId('gearboxSelect').querySelectorAll('.car-configuration__section-item')[1].textContent).toContain('automatic')
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
          allowedGearbox: [
            {
              ...fakeGearbox,
              name: 'manual',
              isSelected: true,
              _id: '1234'
            },
            {
              ...fakeGearbox,
              name: 'automatic',
              isSelected: false,
              _id: '4321'
            }
          ],
          _id: '1234'
        }
      ]
    }))
    const { queryByTestId } = renderWithReduxAndTranslations(<GearboxSelect />, store)

    expect(queryByTestId('gearboxSelect').querySelectorAll('.car-configuration__section-item')[0].classList.contains('car-configuration__section-item--selected')).toBeTruthy()
    expect(queryByTestId('gearboxSelect').querySelectorAll('.car-configuration__section-item')[1].classList.contains('car-configuration__section-item--selected')).toBeFalsy()

    fireEvent.click(queryByTestId('gearboxSelect').querySelectorAll('.car-configuration__section-item')[1])
    expect(queryByTestId('gearboxSelect').querySelectorAll('.car-configuration__section-item')[0].classList.contains('car-configuration__section-item--selected')).toBeFalsy()
    expect(queryByTestId('gearboxSelect').querySelectorAll('.car-configuration__section-item')[1].classList.contains('car-configuration__section-item--selected')).toBeTruthy()
  })
})
