import { zodResolver } from '@hookform/resolvers/zod'
import { useApiFetchCategory, useApiModifyCategory } from 'entities'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { useRouter } from 'shared/lib'
import { FormSchema, schema } from './schema'

export const useLogic = () => {
  const params = useParams()
  const { data } = useApiFetchCategory({ id: params.id })

  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  React.useEffect(() => {
    if (!data) return

    form.setValue('id', data.id)
    form.setValue('name', data.name)
    form.trigger()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const router = useRouter()

  const modifyCategory = useApiModifyCategory()

  const onSubmit = () =>
    modifyCategory.mutate(form.getValues(), { onSuccess: router.nav.back })

  return {
    value: { form },
    handler: {
      onSubmit,
    },
  }
}
