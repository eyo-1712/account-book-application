import { useRouter } from 'shared/lib'

export const AddAccountDetail = () => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      onClick={nav.accountFormAdd}
      className="text-blue-600 font-bold"
    >
      추가
    </button>
  )
}
