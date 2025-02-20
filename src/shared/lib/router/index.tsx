import { generateQuery } from 'entities/generate-query'
import { useNavigate } from 'react-router'
import { DynamicQuery } from 'shared/types'

export const useRouter = () => {
  const router = useNavigate()

  const routing = (name: string) => () => router(name)

  return {
    nav: {
      // utils
      back: () => router(-1),

      // auth
      login: routing('/login'),

      // summary
      calendar: routing('/'),
      summaryMonth: (params: Pick<DynamicQuery, 'year' | 'month'>) =>
        routing(`/summary${generateQuery(params)}`),
      summaryId: ({ id }: Pick<DynamicQuery, 'id'>) =>
        routing(`/summary/${id}`),
      createSummary: routing('/summary/form'),
      modifySummary: ({ id }: Pick<DynamicQuery, 'id'>) =>
        routing(`/summary/form/${id}`),

      // account
      account: routing('/account'),
      accountId: ({ id }: Pick<DynamicQuery, 'id'>) =>
        routing(`/account/${id}`),
      createAccount: routing('/account/form'),
      modifyAccount: ({ id }: Pick<DynamicQuery, 'id'>) =>
        routing(`/account/form/${id}`),
      transfer: ({ id }: Pick<DynamicQuery, 'id'>) =>
        routing(`/account/${id}/transfer`),

      // category
      category: routing('/category'),
      categoryId: ({ id }: Pick<DynamicQuery, 'id'>) =>
        routing(`/category/${id}`),
      createCategory: routing('/category/form'),
      modifyCategory: ({ id }: Pick<DynamicQuery, 'id'>) =>
        routing(`/category/form/${id}`),

      // fixed
      fixed: routing('/fixed'),
      fixedId: ({ id }: Pick<DynamicQuery, 'id'>) => routing(`/fixed/${id}`),
      createFixed: routing('/fixed/form'),
      modifyFixed: ({ id }: Pick<DynamicQuery, 'id'>) =>
        routing(`/fixed/form/${id}`),

      analysis: routing('/analysis'),
    },
  }
}
