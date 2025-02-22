import { DynamicQuery } from 'shared/types'
import { api } from '../api'
import { SuccessResponse } from '../type'

interface CreateCategoryBody {
  categories: { name: string }[]
}

export const apiCreateCategory = async (json: CreateCategoryBody) => {
  const response = await api.post(`/api/category`, { json }).json()
  return response
}

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

export const apiFetchCategory = async ({ id }: Pick<DynamicQuery, 'id'>) => {
  const response: SuccessResponse<Category> = await api
    .get(`/api/category/${id}`)
    .json()

  return response
}

export type ModifyCategoryBody = Pick<Category, 'id' | 'name'>

export const apiModifyCategory = async (json: ModifyCategoryBody) => {
  const response = await api.patch(`/api/category`, { json })
  return response
}

export const apiRemoveCategory = async ({ id }: Pick<DynamicQuery, 'id'>) => {
  const response = await api.delete(`/api/category/${id}`)
  return response
}
