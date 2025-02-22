import {
  useApiFetchAccount,
  useApiFetchSummaryByTopic,
  useApiRemoveAccount,
} from 'entities'
import { useParams } from 'react-router'
import { useRouter } from 'shared/lib'

export const useLogic = () => {
  const router = useRouter()
  const params = useParams()
  const { data: account } = useApiFetchAccount({ id: params.id })
  const infiniteSummariesByCategory = useApiFetchSummaryByTopic({
    topic: 'accountId',
    topicId: params.id,
  })

  const removeAccount = useApiRemoveAccount()

  const onClickRemove = () => {
    removeAccount.mutate({ id: account?.id }, { onSuccess: router.nav.back })
  }

  return {
    value: { account, infiniteSummariesByCategory },
    handler: { onClickRemove },
  }
}
