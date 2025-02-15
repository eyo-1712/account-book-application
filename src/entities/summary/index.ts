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
  type: 'expenditure' | 'income'
  money: number
  datetime: string
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
