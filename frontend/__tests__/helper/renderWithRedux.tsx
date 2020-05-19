import React from 'react'
import { Store } from 'redux'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

export default (component: any, store: Store) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  }
}
