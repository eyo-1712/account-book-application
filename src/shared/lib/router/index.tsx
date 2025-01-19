import { useNavigate } from 'react-router'

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
      summaryMonth: routing('/summary'),
      summaryId: (id: string) => routing(`/summary/${id}`),
      createSummary: routing('/summary/form'),
      modifySummary: (id: string) => routing(`/summary/form/${id}`),

      // account
      account: routing('/account'),
      accountId: (id: number) => routing(`/account/${id}`),
      createAccount: routing('/account/form'),
      modifyAccount: (id: number) => routing(`/account/form/${id}`),
      transfer: (id: number) => routing(`/account/${id}/transfer`),

      // category
      category: routing('/category'),
      categoryId: (id: number) => routing(`/category/${id}`),
      createCategory: routing('/category/form'),
      modifyCategory: (id: number) => routing(`/category/form/${id}`),

      // fixed
      fixed: routing('/fixed'),
      fixedId: (id: string) => routing(`/fixed/${id}`),
      createFixed: routing('/fixed/form'),
      modifyFixed: (id: string) => routing(`/fixed/form/${id}`),

      analysis: routing('/analysis'),
    },
  }
}
