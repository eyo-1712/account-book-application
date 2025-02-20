import { zodResolver } from '@hookform/resolvers/zod'

import { useApiFetchAccount, useApiModifyAccount } from 'entities'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { useRouter } from 'shared/lib'
import { FormSchema, schema } from './schema'

export const useLogic = () => {
  const params = useParams()
  const { data: account } = useApiFetchAccount({ id: params.id })

  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: account?.id,
      money: account?.money,
      name: account?.name,
      number: account?.number,
    },
    mode: 'onChange',
  })
  const router = useRouter()

  const modifyAccount = useApiModifyAccount()
  const onSubmit = () => {
    modifyAccount.mutate(form.getValues(), { onSuccess: router.nav.back })
  }

  return { value: { form }, handler: { onSubmit } }
}
