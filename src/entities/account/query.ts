import { useQuery } from '@tanstack/react-query'
import { SuccessResponse } from 'entities/type'
import { Account, apiFetchAccount, apiFetchAccounts } from '.'

export const useApiFetchAccounts = () =>
  useQuery<SuccessResponse<Account[]>, Error, Account[]>({
    queryKey: ['account'],
    queryFn: apiFetchAccounts,
    select: ({ data }) => data,
  })

export const useApiFetchAccount = (id: string) =>
  useQuery<SuccessResponse<Account>, Error, Account>({
    queryKey: ['account', `${id}`],
    queryFn: () => apiFetchAccount(id),
    select: ({ data }) => data,
  })
