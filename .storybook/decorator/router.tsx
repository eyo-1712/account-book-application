import React from 'react'
import { BrowserRouter } from 'react-router'

export const BrowserRouterDecorator = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)
