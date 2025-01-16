export type TIcon =
  | 'back'
  | 'left'
  | 'right'
  | 'close'
  | 'chart'
  | 'calendar'
  | 'card'
  | 'category'
  | 'create-category'
  | 'menu'
  | 'remove-form'
  | 'wallet'
  | 'logout'

export interface IconProps {
  type: TIcon
}
