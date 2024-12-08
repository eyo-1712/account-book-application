import { useNavigate } from 'react-router'

export const useRouter = () => {
  const router = useNavigate()

  return {
    nav: {
      back: () => {
        router(-1)
      },
      login: () => {
        router('/login')
      },

      calendar: () => {
        router('/', { replace: true })
      },

      summaryMonth: () => () => {
        router('/summary')
      },
      summaryId: (id: string) => () => {
        router(`/summary/${id}`)
      },

      createAccountForm: () => {
        router('/account/form')
      },
      modifyAccountForm: (id: string) => () => {
        router(`/account/form/${id}`)
      },

      // category
      category: () => {
        router('/category', { replace: true })
      },
      createCategory: () => {
        router('/category/form')
      },
      modifyCategory: () => {
        router('/category/form')
      },
    },
  }
}
