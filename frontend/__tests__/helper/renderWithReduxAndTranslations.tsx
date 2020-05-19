import React from 'react'
import { render } from '@testing-library/react'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import resources from '../../src/translations/resources'
import config from '../../src/config/config'
import { Store } from 'redux'
import { Provider } from 'react-redux'

export default (component: any, store: Store) => {
  const i18nInstance = i18n.createInstance()
  i18nInstance
    .use(initReactI18next)
    .init({
      resources,
      lng: config.startingLanguage
    })

  return {
    ...render(<I18nextProvider i18n={i18nInstance}><Provider store={store}>{component}</Provider></I18nextProvider>),
    store
  }
}
