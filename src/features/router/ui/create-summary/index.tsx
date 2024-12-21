import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateSummary = () => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.createSummaryForm}>
      추가
    </Button>
  )
}
