import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 0 },
      mutations: {},
    },
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
