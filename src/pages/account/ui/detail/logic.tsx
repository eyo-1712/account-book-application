import { useApiFetchAccount, useApiRemoveAccount } from 'entities'
import { useParams } from 'react-router'
import { useRouter } from 'shared/lib'

export const useLogic = () => {
  const router = useRouter()
  const params = useParams()
  const { data: account } = useApiFetchAccount(params?.id ?? '')

  const removeAccount = useApiRemoveAccount()

  const onClickRemove = () => {
    removeAccount.mutate(account?.id ?? 0, {
      onSuccess: router.nav.back,
    })
  }

  return {
    value: { account },
    handler: { onClickRemove },
  }
}
