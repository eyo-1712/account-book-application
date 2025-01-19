import { BodyProps } from './type'

export const Body = (props: BodyProps) => (
  <div
    className={[
      'flex flex-col w-full px-7 py-2',
      `${props?.center && 'items-center'}`,
    ].join(' ')}
  >
    {props.children}
  </div>
)
