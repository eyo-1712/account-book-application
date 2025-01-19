import { zodResolver } from '@hookform/resolvers/zod'

import { useApiCreateAccount } from 'entities'
import { useForm } from 'react-hook-form'
import { useRouter } from 'shared/lib'
import { FormSchema, schema } from './schema'

export const useLogic = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {},
    mode: 'onChange',
  })
  const router = useRouter()

  const createAccount = useApiCreateAccount()
  const onSubmit = () => {
    createAccount.mutate(form.getValues(), {
      onSuccess: router.nav.back,
    })
  }

  return { value: { form }, handler: { onSubmit } }
}
