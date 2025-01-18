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
  id: number
  name: string
  sort: number
}
export const apiFetchCategories = async () => {
  const response: SuccessResponse<Category[]> = await api
    .get(`/api/category`)
    .json()

  return response
}

export const apiFetchCategory = async (id: string) => {
  const response: SuccessResponse<Category> = await api
    .get(`/api/category/${id}`)
    .json()

  return response
}

export type UpdateCategoryBody = Pick<Category, 'id' | 'name'>

export const apiModifyCategory = async (json: UpdateCategoryBody) => {
  await api.patch(`/api/category`, { json })
}

export const apiRemoveCategory = async (id: number) => {
  await api.delete(`/api/category/${id}`)
}
