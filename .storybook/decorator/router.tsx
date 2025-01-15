import React from 'react'
import { BrowserRouter } from 'react-router'

export const BrowserRouterDecorator = (Story) => {
  if (!document.getElementById('root')) {
    const portalRoot = document.createElement('div')
    portalRoot.id = 'root'
    document.body.appendChild(portalRoot)
  }

  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )
}
