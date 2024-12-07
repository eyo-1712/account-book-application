import { IAccountType } from 'shared/lib'

export interface IForm {
  type: IAccountType
  money: string
  category: string
  datetime: string
}
