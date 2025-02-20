import { useQuery } from '@tanstack/react-query'
import { DynamicQuery } from 'shared/types'
import { Account, apiFetchAccount, apiFetchAccounts } from '.'
import { SuccessResponse } from '../type'

export const useApiFetchAccounts = () =>
  useQuery<SuccessResponse<Account[]>, Error, Account[]>({
    queryKey: ['account'],
    queryFn: apiFetchAccounts,
    select: ({ data }) => data,
  })

export const useApiFetchAccount = ({ id }: Pick<DynamicQuery, 'id'>) =>
  useQuery<SuccessResponse<Account>, Error, Account>({
    queryKey: ['account', `${id}`],
    queryFn: () => apiFetchAccount({ id }),
    select: ({ data }) => data,
  })
