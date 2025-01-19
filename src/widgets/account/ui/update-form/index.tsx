import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from 'shadcn/components/ui/form'
import { Button, Input } from 'shared/ui'
import { useLogic } from './logic'
import { Context, useCreateFormContext } from './provider'

const FormUI = () => {
  const {
    value: { form },
  } = useCreateFormContext()

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="자산 이름을 적어주세요."
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="계좌번호를 입력해주세요."
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="money"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder="잔액을 입력해주세요."
                  onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export const SubmitButton = () => {
  const {
    value: { form },
    handler,
  } = useCreateFormContext()
  return (
    <Button
      color="blue"
      type="button"
      onClick={handler.onSubmit}
      disabled={!form.formState.isValid}
    >
      수정
    </Button>
  )
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const { value, handler } = useLogic()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const providerValue = React.useMemo(() => ({ value, handler }), [value])

  return <Context.Provider value={providerValue}>{children}</Context.Provider>
}

export const UpdateAccountForm = {
  Form: FormUI,
  Provider,
  SubmitButton,
}
