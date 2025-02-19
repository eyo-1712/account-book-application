import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useApiModifySummary } from 'entities'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
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
  const { id } = useParams()

  const router = useRouter()

  const modifySummary = useApiModifySummary()
  const onSubmit = () => {
    modifySummary.mutate(
      { ...form.getValues(), id: parseInt(id!, 10) },
      { onSuccess: router.nav.back },
    )
  }

  return { value: { form }, handler: { onSubmit } }
}
