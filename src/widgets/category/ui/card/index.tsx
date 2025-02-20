import type { Category } from 'entities'
import { useRouter } from 'shared/lib'

export const CategoryCard = ({ category }: { category: Category }) => {
  const { nav } = useRouter()

  return (
    <button
      type="button"
      className="flex flex-col items-start w-full py-2"
      onClick={nav.categoryId({ id: category.id })}
    >
      <p className="font-bold">{category.name}</p>
    </button>
  )
}
