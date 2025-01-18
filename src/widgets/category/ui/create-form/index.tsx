import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from 'shadcn/components/ui/form'
import { Button, Icon, Input } from 'shared/ui'
import { useLogic } from './logic'
import { Context, useCreateFormContext } from './provider'

const FormUI = () => {
  const {
    value: { form },
    handler,
  } = useCreateFormContext()
  const categories = form.watch('categories')

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2">
        {categories.map((category, index) => (
          <FormField
            control={form.control}
            name={`categories.${index}.name`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div
                    key={category.id}
                    className="flex flex-row items-center justify-start w-full gap-2"
                  >
                    <button
                      type="button"
                      className="text-gray-600"
                      onClick={handler.onRemoveCategory(category.id)}
                    >
                      <Icon type="remove-form" />
                    </button>
                    <Input
                      type="text"
                      placeholder="카테고리 이름을 적어주세요."
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        ))}
        <button
          type="button"
          className="flex flex-row items-center justify-center py-2 border rounded gap-4"
          onClick={handler.onCreateCategory}
        >
          <Icon type="create-category" />
          <p>카테고리 추가하기</p>
        </button>
      </form>
    </Form>
  )
}

const SubmitButton = () => {
  const {
    value: { form },
    handler,
  } = useCreateFormContext()

  return (
    <Button
      color="blue"
      type="submit"
      disabled={!form.formState.isValid}
      onClick={handler.onSubmit}
    >
      추가
    </Button>
  )
}

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { value, handler } = useLogic()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const providerValue = React.useMemo(() => ({ value, handler }), [value])

  return <Context.Provider value={providerValue}>{children}</Context.Provider>
}

export const CreateCategoryForm = {
  Form: FormUI,
  SubmitButton,
  Provider,
}
