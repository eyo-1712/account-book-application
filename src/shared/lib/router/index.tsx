import { useNavigate } from 'react-router'

export const useRouter = () => {
  const router = useNavigate()

  return {
    nav: {
      // utils
      back: () => router(-1),

      // auth
      login: () => router('/login'),

      // summary
      calendar: () => router('/'),
      summaryMonth: () => () => router('/summary'),
      summaryId: (id: string) => () => router(`/summary/${id}`),
      createSummaryForm: () => router('/summary/form'),
      modifySummaryForm: (id: string) => () => router(`/summary/form/${id}`),

      account: () => router('/account'),

      // category
      category: () => router('/category'),
      categoryId: (id: string) => () => router(`/category/${id}`),
      createCategory: () => router('/category/form'),
      modifyCategory: (id: string) => () => router(`/category/form/${id}`),

      // fixed
      fixed: () => router('/fixed'),
      fixedId: (id: string) => () => router(`/fixed/${id}`),
      createFixed: () => router('/fixed/form'),
      modifyFixed: (id: string) => () => router(`/fixed/form/${id}`),

      analysis: () => router('/analysis'),
    },
  }
}
