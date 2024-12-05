import { useRouter } from 'shared/lib'

export const AddAccountDetail = () => {
  const { nav } = useRouter()

  return (
    <button type="button" onClick={nav.accountFormAdd}>
      추가
    </button>
  )
}
