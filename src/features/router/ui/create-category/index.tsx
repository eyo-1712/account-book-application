import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateCategory = () => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.createCategory}>
      추가
    </Button>
  )
}
