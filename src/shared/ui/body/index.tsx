import { IProps } from './type'

export const Body = (props: IProps) => (
  <div
    className={[
      'flex flex-col w-full px-4 py-2',
      `${props?.center && 'items-center'}`,
    ].join(' ')}
  >
    {props.children}
  </div>
)
