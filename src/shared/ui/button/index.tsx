import { BUTTON_COLOR } from './constant'
import { IProps } from './type'

export const Button = ({ children, color, ...props }: IProps) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={[
      'font-bold disabled:text-gray-300',
      `${BUTTON_COLOR[color]}`,
    ].join(' ')}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </button>
)
