import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'

export const ModifyAccount = () => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.modifyAccount('12')}>
      추가
    </Button>
  )
}
