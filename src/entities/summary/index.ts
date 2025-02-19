import { Category } from 'entities/category'
import { SuccessResponse } from 'entities/type'
import { generateQuery } from 'shared/utils'
import { api } from '../api'

interface CreateSummaryBody {
  type: string
  accountId: number
  categoryId: number
  money: number
  datetime: string
}

export const apiCreateSummary = async (json: CreateSummaryBody) => {
  const response = await api.post(`/api/summary`, { json }).json()
  return response
}

export interface Summary {
  id: number
  type: 'expenditure' | 'income'
  money: number
  datetime: string
  category: Category
}

export const apiFetchSummariesByDate = async (params: {
  year: number
  month: number
}) => {
  const response: SuccessResponse<Summary[]> = await api
    .get(`/api/summary${generateQuery(params)}`)
    .json()
  return response
}

export const apiFetchSummary = async (id: string) => {
  const response: SuccessResponse<Summary> = await api
    .get(`/api/summary/${id}`)
    .json()
  return response
}

interface ModifySummaryBody extends CreateSummaryBody {
  id: number
}

export const apiModifySummary = async (json: ModifySummaryBody) => {
  const response: SuccessResponse<Summary> = await api
    .put(`/api/summary`, { json })
    .json()
  return response
}

export const apiRemoveSummary = async (id: string) => {
  const response: SuccessResponse<Summary> = await api
    .delete(`/api/summary/${id}`)
    .json()

  return response
}
