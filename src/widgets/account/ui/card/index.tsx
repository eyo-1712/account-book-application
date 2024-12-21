import { IProps } from './type'

export const AccountCard = (props: IProps) => (
  <div className="flex flex-row items-center justify-start gap-4">
    {/* <button type="button" className="text-sm text-gray-400 ">
      <Icon type="menu" />
    </button> */}
    <div className="flex flex-col items-start">
      <p className="text-sm text-gray-600">{props.name}</p>
      <p className="text-lg font-bold">{props.price.toLocaleString()} 원</p>
    </div>
  </div>
)
