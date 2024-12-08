import { useRouter } from 'shared/lib'

export const CreateAccount = () => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      onClick={nav.createAccountForm}
      className="font-bold text-blue-600"
    >
      추가
    </button>
  )
}
