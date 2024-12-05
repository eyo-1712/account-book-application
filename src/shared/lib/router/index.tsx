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
        router('/calendar')
      },
      summaryMonth: () => () => {
        router('/summary')
      },
      summaryId: (id: string) => () => {
        router(`/summary/${id}`)
      },
      accountFormAdd: () => {
        router('/account/form')
      },
      accountFormEdit: (id: string) => () => {
        router(`/account/form/${id}`)
      },
    },
  }
}
