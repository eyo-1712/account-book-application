export type TButtonColor = 'blue' | 'red' | 'black' | 'gray'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: TButtonColor
  rounded?: boolean
}
