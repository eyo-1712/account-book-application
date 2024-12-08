export type TButtonColor = 'blue' | 'red'

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: TButtonColor
}
