import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 60 * 24 } },
})

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode
}) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
