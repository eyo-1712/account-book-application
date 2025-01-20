import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from 'shadcn/components/ui/form'
import { Button, Input, Select } from 'shared/ui'
import { useLogic } from './logic'
import { Context, useTransferFormContext } from './provider'

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { value, handler } = useLogic()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const providerValue = React.useMemo(() => ({ value, handler }), [value])

  return <Context.Provider value={providerValue}>{children}</Context.Provider>
}

const FormUI = () => {
  const {
    value: { form, options },
  } = useTransferFormContext()

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2">
        <FormField
          control={form.control}
          name="giveId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  placeholder="이체 할 계좌를 선택하세요"
                  options={options}
                  onValueChange={(v) => field.onChange(parseInt(v, 10))}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="takeId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  placeholder="이체 받을 계좌를 선택하세요"
                  options={options}
                  onValueChange={(v) => field.onChange(parseInt(v, 10))}
                  disabledValue={`${form.watch('giveId')}`}
                  disabled={!form.watch('giveId')}
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
                  disabled={!form.watch('giveId')}
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

const SubmitButton = () => {
  const {
    value: { form },
    handler,
  } = useTransferFormContext()

  return (
    <Button
      color="blue"
      type="submit"
      disabled={!form.formState.isValid}
      onClick={handler.onSubmit}
    >
      이체
    </Button>
  )
}

export const TransferForm = {
  Form: FormUI,
  Provider,
  SubmitButton,
}
