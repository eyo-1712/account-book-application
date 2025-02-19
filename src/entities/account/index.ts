import { api } from '../api'
import { SuccessResponse } from '../type'

interface CreateAccountBody {
  name: string
  money: number
  number: string
}

export const apiCreateAccount = async (json: CreateAccountBody) => {
  const response = await api.post(`/api/account`, { json }).json()
  return response
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

interface ModifyAccountBody extends CreateAccountBody {
  id: number
}

export const apiModifyAccount = async (json: ModifyAccountBody) => {
  const response = await api.patch(`/api/account`, { json })
  return response
}

export const apiRemoveAccount = async (id: number) => {
  const response = await api.delete(`/api/account/${id}`)
  return response
}

interface TransferBody {
  giveId: number
  takeId: number
  money: number
}

export const apiTransfer = async (json: TransferBody) => {
  const response = await api.patch(`/api/account/transfer`, { json })
  return response
}
