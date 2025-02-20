import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useApiFetchSummary, useApiModifySummary } from 'entities'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { useRouter } from 'shared/lib'
import { FormSchema, schema } from './schema'

export const useLogic = () => {
  const id = useParams().id ?? ''
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      datetime: format(new Date(), `yyyy-MM-dd'T'HH:mm:ss`),
    },
  })
  const { data: summary } = useApiFetchSummary({ id })
  const router = useRouter()

  const modifySummary = useApiModifySummary()
  const onSubmit = () => {
    modifySummary.mutate(
      { ...form.getValues(), id },
      { onSuccess: router.nav.back },
    )
  }

  React.useEffect(() => {
    if (!summary) return

    form.setValue('accountId', summary?.account.id)
    form.setValue('categoryId', summary?.category.id)
    form.setValue('datetime', summary?.datetime)
    form.setValue('money', summary?.money)
    form.setValue('type', summary?.type)
    form.trigger()
  }, [summary, form])

  return { value: { form }, handler: { onSubmit } }
}
