import { useRouter } from 'shared/lib'

export const FixedCard = () => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      className="flex flex-row items-center px-4 py-2 gap-4"
      onClick={nav.fixedId('123')}
    >
      <p className="text-xl font-bold text-blue-600">D-25</p>
      <div className="flex flex-col items-start">
        <p className="text-sm text-gray-600">카테고리 - 고정지출</p>
        <p className="text-lg font-bold">30,000 원</p>
      </div>
    </button>
  )
}
