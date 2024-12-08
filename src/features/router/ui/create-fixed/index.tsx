import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateFixed = () => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.createFixed}>
      추가
    </Button>
  )
}
