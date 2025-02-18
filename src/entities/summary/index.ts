import { Category } from 'entities/category'
import { generateQuery } from 'entities/generate-query'
import { SuccessResponse } from 'entities/type'
import { api } from '../api'

interface CreateSummaryBody {
  type: string
  account: number
  category: number
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

export const apiRemoveSummary = async (id: string) => {
  const response: SuccessResponse<Summary> = await api
    .delete(`/api/summary/${id}`)
    .json()

  return response
}
