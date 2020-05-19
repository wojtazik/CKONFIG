import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../../src/store/reducers/index'
import { cleanup, fireEvent } from '@testing-library/react'
import renderWithReduxAndTranslations from '../../../helper/renderWithReduxAndTranslations'
import ChangeLanguage from '../../../../src/components/ChangeLanguage/ChangeLanguage'
const changeLangMock = jest.fn()

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'pl',
      changeLanguage: changeLangMock
    }
  })
}))

describe('functional tests for car configuration component', () => {
  let store: any

  beforeEach(() => {
    store = createStore(rootReducer)
  })
  afterEach(cleanup)

  test('should render component', () => {
    const { getByTestId } = renderWithReduxAndTranslations(<ChangeLanguage />, store)

    expect(getByTestId('changeLanguage')).not.toBeNull()
  })

  test('should cal change lang function on button click', () => {
    const { getAllByTestId } = renderWithReduxAndTranslations(<ChangeLanguage />, store)
    fireEvent.click(getAllByTestId('changeLanguage-item')[1])
    expect(changeLangMock).toHaveBeenCalled()
  })
})
