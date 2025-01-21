import { zodResolver } from '@hookform/resolvers/zod'
import { useApiFetchAccounts, useApiTransfer } from 'entities'
import { useForm } from 'react-hook-form'
import { useRouter } from 'shared/lib'
import { FormSchema, schema } from './schema'

export const useLogic = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {},
  })
  const router = useRouter()

  const { data, isSuccess } = useApiFetchAccounts()

  const options = (isSuccess ? data : []).map((r) => ({
    label: r.name,
    value: `${r.id}`,
  }))

  const transfer = useApiTransfer()
  const onSubmit = () => {
    transfer.mutate(form.getValues(), {
      onSuccess: router.nav.back,
    })
  }

  return { value: { form, options }, handler: { onSubmit } }
}
