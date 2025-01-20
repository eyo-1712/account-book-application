import { zodResolver } from '@hookform/resolvers/zod'
import { useApiFetchAccounts, useApiTransfer } from 'entities'
import { useForm } from 'react-hook-form'
import { FormSchema, schema } from './schema'

export const useLogic = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {},
  })

  const { data, isSuccess } = useApiFetchAccounts()

  const options = (isSuccess ? data : []).map((r) => ({
    label: r.name,
    value: `${r.id}`,
  }))

  const transfer = useApiTransfer()
  const onSubmit = () => {
    transfer.mutate(form.getValues())
  }

  return { value: { form, options }, handler: { onSubmit } }
}
