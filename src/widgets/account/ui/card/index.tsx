import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'
import { IProps } from './type'

export const AccountCard = (props: IProps) => {
  const { nav } = useRouter()
  return (
    <div className="flex flex-row items-center justify-between gap-4 px-4 py-2">
      {/* <button type="button" className="text-sm text-gray-400 ">
              <Icon type="menu" />
            </button> */}
      <button
        type="button"
        className="flex flex-col items-start"
        onClick={nav.accountId('123')}
      >
        <p className="text-sm text-gray-600">{props.name}</p>
        <p className="text-lg font-bold">{props.price.toLocaleString()} 원</p>
      </button>
      <Button type="button" color="gray" rounded>
        이체
      </Button>
    </div>
  )
}
