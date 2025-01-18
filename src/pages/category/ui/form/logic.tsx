import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FormSchema, schema } from './schema'

export const useLogic = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      categories: [{ id: new Date().toISOString(), category: '' }],
    },
    mode: 'onChange',
  })

  const onCreateCategory = () => {
    const init = { id: new Date().toISOString(), category: '' }
    form.setValue('categories', [...form.getValues().categories, init])
  }

  const onRemoveCategory = (_: string) => () => {
    const filtered = form.getValues().categories.filter(({ id }) => id !== _)
    form.setValue('categories', filtered)
  }

  const onChangeCategory =
    (id: string): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const updated = form.getValues().categories.map((category) => {
        if (category.id !== id) return category

        return { ...category, category: e.target.value }
      })
      form.setValue('categories', updated)
    }

  return {
    value: { form },
    handler: {
      onCreateCategory,
      onRemoveCategory,
      onChangeCategory,
    },
  }
}
