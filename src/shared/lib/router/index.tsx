import { useNavigate } from 'react-router'

export const useRouter = () => {
  const router = useNavigate()

  return {
    nav: {
      // utils
      back: () => router(-1),

      // auth
      login: () => router('/login'),

      // account
      calendar: () => router('/'),
      summaryMonth: () => () => router('/summary'),
      summaryId: (id: string) => () => router(`/summary/${id}`),
      createAccountForm: () => router('/account/form'),
      modifyAccountForm: (id: string) => () => router(`/account/form/${id}`),

      // category
      category: () => router('/category'),
      categoryId: (id: string) => () => router(`/category/${id}`),
      createCategory: () => router('/category/form'),
      modifyCategory: () => router('/category/form'),

      // fixed
      fixed: () => router('/fixed'),
      fixedId: (id: string) => () => router(`/fixed/${id}`),
      createFixed: () => router('/fixed/form'),
      modifyFixed: (id: string) => () => router(`/fixed/form/${id}`),

      analysis: () => router('/analysis'),
    },
  }
}
