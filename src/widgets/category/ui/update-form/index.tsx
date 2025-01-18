import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from 'shadcn/components/ui/form'
import { Button, Input } from 'shared/ui'
import { useLogic } from './logic'
import { Context, useUpdateFormContext } from './provider'

const FormUI = () => {
  const {
    value: { form },
  } = useUpdateFormContext()

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-row items-center justify-start w-full gap-2">
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
      </form>
    </Form>
  )
}

const SubmitButton = () => {
  const {
    value: { form },
    handler,
  } = useUpdateFormContext()

  return (
    <Button
      color="blue"
      type="submit"
      disabled={!form.formState.isValid}
      onClick={handler.onSubmit}
    >
      수정
    </Button>
  )
}

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { value, handler } = useLogic()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const providerValue = React.useMemo(() => ({ value, handler }), [value])

  return <Context.Provider value={providerValue}>{children}</Context.Provider>
}

export const UpdateCategoryForm = {
  Form: FormUI,
  SubmitButton,
  Provider,
}
