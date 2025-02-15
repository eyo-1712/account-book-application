import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useApiCreateSummary } from 'entities'
import { useForm } from 'react-hook-form'
import { useRouter } from 'shared/lib'
import { FormSchema, schema } from './schema'

export const useLogic = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      datetime: format(new Date(), `yyyy-MM-dd'T'HH:mm:ss`),
    },
  })

  const router = useRouter()

  const createSummary = useApiCreateSummary()
  const onSubmit = () => {
    createSummary.mutate(form.getValues(), {
      onSuccess: router.nav.back,
    })
  }

  return { value: { form }, handler: { onSubmit } }
}
