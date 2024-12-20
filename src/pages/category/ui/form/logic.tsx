import dayjs from 'dayjs'
import React from 'react'
import { ICategoryForm } from './type'

export const useLogic = () => {
  const [form, setForm] = React.useState<ICategoryForm[]>([
    { id: dayjs().toISOString(), category: '' },
  ])

  const createCategoryForm = () => {
    const init = { id: dayjs().toISOString(), category: '' }

    setForm((prev) => prev.concat(init))
  }

  const removeCategoryForm = (id: string) => () => {
    setForm((prev) => prev.filter((p) => p.id !== id))
  }

  const onChangeCategory =
    (id: string): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      setForm((prev) => {
        const index = prev.findIndex((p) => p.id === id)

        const updated = [...prev]
        updated[index].category = e.target.value

        return updated
      })
    }

  return {
    value: {
      form,
    },
    handler: {
      create: createCategoryForm,
      remove: removeCategoryForm,
      category: onChangeCategory,
    },
  }
}
