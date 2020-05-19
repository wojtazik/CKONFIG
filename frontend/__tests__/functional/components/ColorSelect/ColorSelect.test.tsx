import React from 'react'
import renderWithReduxAndTranslations from '../../../helper/renderWithReduxAndTranslations'
import { createStore } from 'redux'
import rootReducer from '../../../../src/store/reducers'
import { cleanup, fireEvent } from '@testing-library/react'
import ColorSelect from '../../../../src/components/ColorSelect/ColorSelect'
import { setCarOption } from '../../../../src/store/actions/carOptionActions'
import carOptionFaker, { fakeColor } from '../../../helper/faker/carOptionFaker'

describe('functional tests for color select component', () => {
  let store: any

  beforeEach(() => {
    store = createStore(rootReducer)
  })
  afterEach(cleanup)

  test('should render component when is car option in state', () => {
    store.dispatch(setCarOption(carOptionFaker()))
    const { getByTestId } = renderWithReduxAndTranslations(<ColorSelect />, store)

    expect(getByTestId('colorSelect')).not.toBeNull()
  })
  test('should not  render component when is car option in state', () => {
    const { queryByTestId } = renderWithReduxAndTranslations(<ColorSelect />, store)

    expect(queryByTestId('colorSelect')).toBeNull()
  })
  test('should render proper count of colors', () => {
    store.dispatch(setCarOption({
      ...carOptionFaker(),
      colors: [
        {
          ...fakeColor,
          _id: '1241s123',
          isSelected: true,
          colorCode: 'red'
        },
        {
          ...fakeColor,
          _id: '1241s13d1123',
          isSelected: false,
          colorCode: 'blue'
        }
      ]
    }))
    const { getAllByTestId } = renderWithReduxAndTranslations(<ColorSelect />, store)

    expect(getAllByTestId('colorSelect-item').length).toEqual(store.getState().carOptionState.colors.length)
  })

  test('should render proper class for selected color', () => {
    store.dispatch(setCarOption({
      ...carOptionFaker(),
      colors: [
        {
          ...fakeColor,
          _id: '1241s123',
          isSelected: false,
          colorCode: 'red'
        },
        {
          ...fakeColor,
          _id: '1241s13d1123',
          isSelected: true,
          colorCode: 'blue'
        }
      ]
    }))
    const { getAllByTestId } = renderWithReduxAndTranslations(<ColorSelect />, store)

    expect(getAllByTestId('colorSelect-item')[0].classList.contains('car-configuration__section-item-color--selected')).toBeFalsy()
    expect(getAllByTestId('colorSelect-item')[1].classList.contains('car-configuration__section-item-color--selected')).toBeTruthy()
  })

  test('should set proper selected color on click', () => {
    store.dispatch(setCarOption({
      ...carOptionFaker(),
      colors: [
        {
          ...fakeColor,
          _id: '1241s123',
          isSelected: false,
          colorCode: 'red'
        },
        {
          ...fakeColor,
          _id: '1241s13d1123',
          isSelected: true,
          colorCode: 'blue'
        }
      ]
    }))
    const { getAllByTestId } = renderWithReduxAndTranslations(<ColorSelect />, store)

    expect(getAllByTestId('colorSelect-item')[0].classList.contains('car-configuration__section-item-color--selected')).toBeFalsy()
    expect(getAllByTestId('colorSelect-item')[1].classList.contains('car-configuration__section-item-color--selected')).toBeTruthy()

    fireEvent.click(getAllByTestId('colorSelect-item')[0])
    expect(getAllByTestId('colorSelect-item')[0].classList.contains('car-configuration__section-item-color--selected')).toBeTruthy()
    expect(getAllByTestId('colorSelect-item')[1].classList.contains('car-configuration__section-item-color--selected')).toBeFalsy()
  })

  test('should show color picker on show button click', () => {
    store.dispatch(setCarOption({
      ...carOptionFaker()
    }))
    const { getByTestId, queryByTestId } = renderWithReduxAndTranslations(<ColorSelect />, store)

    expect(queryByTestId('colorSelect-color-picker')).toBeNull()

    fireEvent.click(getByTestId('colorSelect-show-picker'))
    expect(queryByTestId('colorSelect-color-picker')).not.toBeNull()
  })

  test('should show color picker on show button click', () => {
    store.dispatch(setCarOption({
      ...carOptionFaker()
    }))
    const { getByTestId, queryByTestId } = renderWithReduxAndTranslations(<ColorSelect />, store)

    expect(queryByTestId('colorSelect-color-picker')).toBeNull()

    fireEvent.click(getByTestId('colorSelect-show-picker'))
    expect(queryByTestId('colorSelect-color-picker')).not.toBeNull()
  })
})
