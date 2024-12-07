import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { store } from '../../src/app/redux'

export const BrowserRouterDecorator = (Story) => {
  if (!document.getElementById('root')) {
    const portalRoot = document.createElement('div')
    portalRoot.id = 'root'
    document.body.appendChild(portalRoot)
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </Provider>
  )
}
