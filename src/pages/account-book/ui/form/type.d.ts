import { IAccountType } from 'shared/lib'

export interface IForm {
  type: IAccountType
  card: string
  money: money
  category: string
  datetime: string
}
