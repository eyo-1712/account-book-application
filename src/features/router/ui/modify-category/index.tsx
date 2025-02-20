import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'

export const ModifyCategory = ({ id }: { id: string }) => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.modifyCategory({ id })}>
      편집
    </Button>
  )
}
