import { api } from 'entities/api'
import { SuccessResponse } from '../type'

interface CreateCategoryBody {
  categories: { name: string }[]
}

export const apiCreateCategory = async (json: CreateCategoryBody) => {
  await api.post(`/api/category`, { json }).json()
}

///

export interface Category {
  id: string
  name: string
  sort: number
}
export const apiFetchCategories = async () => {
  const response: SuccessResponse<Category[]> = await api
    .get(`/api/category`)
    .json()

  return response
}
