import { useRouter } from 'shared/lib'

export const AddAccountDetail = () => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      onClick={nav.accountFormAdd}
      className="font-bold text-blue-600"
    >
      추가
    </button>
  )
}
