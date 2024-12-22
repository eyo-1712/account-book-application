import { useRouter } from 'shared/lib'

export const Category = () => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      className="flex flex-col items-start w-full py-2"
      onClick={nav.categoryId('123')}
    >
      <p className="font-bold">카테고리 이름</p>
      <p className="text-sm text-gray-600">연관개수: 30개</p>
    </button>
  )
}
