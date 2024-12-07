export type IconType =
  | 'back'
  | 'left'
  | 'right'
  | 'close'
  | 'chart'
  | 'calendar'
  | 'card'
  | 'category'
  | 'category-add'
  | 'menu'

export interface IProps {
  type: IconType
  color?: string
}
