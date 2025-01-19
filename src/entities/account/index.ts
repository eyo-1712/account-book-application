import { api } from 'entities/api'
import { SuccessResponse } from 'entities/type'

interface CreateAccountBody {
  name: string
  money: number
  number: string
}

export const apiCreateAccount = async (json: CreateAccountBody) => {
  await api.post(`/api/account`, { json }).json()
}

export interface Account {
  id: number
  number: string
  name: string
  money: number
}

export const apiFetchAccounts = async () => {
  const response: SuccessResponse<Account[]> = await api
    .get(`/api/account`)
    .json()
  return response
}

export const apiFetchAccount = async (id: string) => {
  const response: SuccessResponse<Account> = await api
    .get(`/api/account/${id}`)
    .json()
  return response
}

interface UpdateAccountBody extends CreateAccountBody {
  id: number
}

export const apiModifyAccount = async (json: UpdateAccountBody) => {
  await api.patch(`/api/account`, { json })
}
