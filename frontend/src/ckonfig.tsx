import React from 'react'
import ReactDOM from 'react-dom'
import Ckonfig from './components/Ckonfig/Ckonfig'
import { createStore, applyMiddleware } from 'redux'
import reducerRoot from './store/reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

if (document.getElementById('ckonfig-root')) {
  const store = createStore(reducerRoot, applyMiddleware(thunk))

  ReactDOM.render(
    <Provider store={store}>
      <Ckonfig />
    </Provider>,
    document.getElementById('ckonfig-root')
  )
}
