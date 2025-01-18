import { zodResolver } from '@hookform/resolvers/zod'
import { useApiCreateCategory } from 'entities'
import { useForm } from 'react-hook-form'
import { useRouter } from 'shared/lib'
import { FormSchema, schema } from './schema'

export const useLogic = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      categories: [{ id: new Date().toISOString(), name: '' }],
    },
    mode: 'onChange',
  })

  const router = useRouter()

  const onCreateCategory = () => {
    const init = { id: new Date().toISOString(), name: '' }
    form.setValue('categories', [...form.getValues().categories, init])
  }

  const onRemoveCategory = (_: string) => () => {
    const filtered = form.getValues().categories.filter(({ id }) => id !== _)
    form.setValue('categories', filtered)
  }

  const createCategory = useApiCreateCategory()

  const onSubmit = () =>
    createCategory.mutate(form.getValues(), {
      onSuccess: router.nav.back,
    })

  return {
    value: { form },
    handler: {
      onCreateCategory,
      onRemoveCategory,
      onSubmit,
    },
  }
}
