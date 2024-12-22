import { useRouter } from 'shared/lib'
import { IId } from 'shared/types'
import { Button } from 'shared/ui'

export const ModifySummary = ({ id }: IId) => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.modifySummary(id)}>
      편집
    </Button>
  )
}
