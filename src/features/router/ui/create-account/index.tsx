import { useRouter } from 'shared/lib'
import { Button } from 'shared/ui'

export const CreateAccount = () => {
  const { nav } = useRouter()

  return (
    <Button color="blue" type="button" onClick={nav.createAccountForm}>
      추가
    </Button>
  )
}
