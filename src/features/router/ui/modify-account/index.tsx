import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'

export const ModifyAccount = ({ id }: { id: number }) => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.modifyAccount(id)}>
      편집
    </Button>
  )
}
