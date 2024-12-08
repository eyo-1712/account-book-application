export type IconType =
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

export interface IProps {
  type: IconType
  color?: string
}
