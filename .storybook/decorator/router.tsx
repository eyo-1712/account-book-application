import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { BrowserRouter } from 'react-router'

export const BrowserRouterDecorator = (Story) => {
  if (!document.getElementById('root')) {
    const portalRoot = document.createElement('div')
    portalRoot.id = 'root'
    document.body.appendChild(portalRoot)
  }

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
