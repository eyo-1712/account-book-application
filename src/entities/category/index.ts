import { api } from 'entities/api'

interface CreateCategoryBody {
  categories: { name: string }[]
}

export const apiCreateCategory = async (json: CreateCategoryBody) => {
  await api.post(`/api/category`, { json }).json()
}
