import { IAccountType } from 'shared/lib'

export interface IForm {
  type: IAccountType
  money: money
  category: string
  datetime: string
}
