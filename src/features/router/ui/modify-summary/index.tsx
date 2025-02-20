import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'

export const ModifySummary = ({ id }: { id: number }) => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.modifySummary({ id })}>
      편집
    </Button>
  )
}
