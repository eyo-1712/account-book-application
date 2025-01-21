import { useQuery } from '@tanstack/react-query'
import { apiAuthInfo } from '.'

export const useApiAuthInfo = () =>
  useQuery({
    queryKey: ['auth'],
    queryFn: apiAuthInfo,
    select: (data) => data.data,
  })
