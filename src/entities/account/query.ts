import { useQuery } from '@tanstack/react-query'
import { SuccessResponse } from 'entities/type'
import { Account, apiFetchAccounts } from '.'

export const useApiFetchAccounts = () =>
  useQuery<SuccessResponse<Account[]>, Error, Account[]>({
    queryKey: ['account'],
    queryFn: apiFetchAccounts,
    select: ({ data }) => data,
  })
