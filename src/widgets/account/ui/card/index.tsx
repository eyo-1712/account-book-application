import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'
import { AccountCardProps } from './type'

export const AccountCard = ({ account }: AccountCardProps) => {
  const { nav } = useRouter()
  return (
    <div className="flex flex-row items-center justify-between py-2 gap-4">
      {/* <button type="button" className="text-sm text-gray-400 ">
              <Icon type="menu" />
            </button> */}
      <button
        type="button"
        className="flex flex-col items-start"
        onClick={nav.accountId(account.id)}
      >
        <p className="text-sm text-gray-600">{account.name}</p>
        <p className="text-lg font-bold">{account.money.toLocaleString()} 원</p>
      </button>
      <Button
        type="button"
        color="gray"
        rounded
        onClick={nav.transfer(account.id)}
      >
        이체
      </Button>
    </div>
  )
}
