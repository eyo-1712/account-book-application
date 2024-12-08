import { useRouter } from 'shared/lib'

export const CreateFixed = () => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      onClick={nav.fixedId('123')}
      className="font-bold text-blue-600"
    >
      추가
    </button>
  )
}
