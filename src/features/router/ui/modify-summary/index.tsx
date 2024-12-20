import { useRouter } from 'shared/lib'
import { IId } from 'shared/types/id'
import { Button } from 'shared/ui'

export const ModifySummary = ({ id }: IId) => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.modifyAccountForm(id)}>
      편집
    </Button>
  )
}
