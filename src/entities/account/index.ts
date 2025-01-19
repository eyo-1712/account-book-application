import { api } from 'entities/api'

export interface CreateAccountBody {
  name: string
  money: number
  number: string
}

export const apiCreateAccount = async (json: CreateAccountBody) => {
  await api.post(`/api/account`, { json }).json()
}
