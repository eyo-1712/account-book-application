export type TButtonColor = 'blue' | 'red' | 'black' | 'gray'

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: TButtonColor
  rounded?: boolean
}
