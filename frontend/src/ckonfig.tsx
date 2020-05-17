import React from 'react'
import ReactDOM from 'react-dom'
import Ckonfig from './components/Ckonfig/Ckonfig'
import { createStore, applyMiddleware } from 'redux'
import reducerRoot from './store/reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import i18n from 'i18next'
import { initReactI18next, I18nextProvider } from 'react-i18next'
import './app.scss'
import config from './config/config'
import resources from './translations/resources'

if (document.getElementById('ckonfig-root')) {
  const store = createStore(reducerRoot, applyMiddleware(thunk))

  const i18nInstance = i18n.createInstance()
  i18nInstance
    .use(initReactI18next)
    .init({
      resources,
      lng: config.startingLanguage,
      keySeparator: false,
      interpolation: {
        escapeValue: false
      }
    })

  ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18nInstance}>
        <Ckonfig />
      </I18nextProvider>
    </Provider>,
    document.getElementById('ckonfig-root')
  )
}
