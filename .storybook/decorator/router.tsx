import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { store } from '../../src/app/redux'

export const BrowserRouterDecorator = (Story) => (
  <Provider store={store}>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  </Provider>
)
