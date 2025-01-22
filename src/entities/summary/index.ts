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
