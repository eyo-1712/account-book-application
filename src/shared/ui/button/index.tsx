import { BUTTON_COLOR } from './constant'
import { IProps } from './type'

export const Button = ({ children, color, rounded, ...props }: IProps) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={[
      'font-bold disabled:text-gray-400',
      `${BUTTON_COLOR[color]}`,
      `${rounded && 'border border-gray-600 px-4 py-1 rounded-lg'}`,
    ].join(' ')}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </button>
)
