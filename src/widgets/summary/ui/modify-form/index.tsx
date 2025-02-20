import { format } from 'date-fns'
import { useApiFetchAccounts, useApiFetchCategories } from 'entities'
import React from 'react'
import { DatePicker } from 'shadcn/components/ui/date-picker'
import { Form, FormControl, FormField } from 'shadcn/components/ui/form'
import { Button, Input, Select } from 'shared/ui'
import { generateOptions } from 'shared/utils'
import { SUMMARY_TYPE_MAP } from './constants'
import { useLogic } from './logic'
import { Context, useModifyFormContext } from './provider'

const FormUI = () => {
  const {
    value: { form },
  } = useModifyFormContext()

  const account = useApiFetchAccounts()
  const categories = useApiFetchCategories()

  const ACCOUNTS = generateOptions({
    array: account.isSuccess ? account.data : [],
    labelKey: 'name',
    valueKey: 'id',
  })
  const CATEGORIES = generateOptions({
    array: categories.isSuccess ? categories.data : [],
    labelKey: 'name',
    valueKey: 'id',
  })

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <Select
              placeholder="지출 목록을 선택해주세요."
              value={form.watch('type')}
              options={SUMMARY_TYPE_MAP}
              onValueChange={(e) => field.onChange(e)}
            />
          )}
        />
        <FormField
          control={form.control}
          name="accountId"
          render={({ field }) => (
            <Select
              value={form.watch('accountId')?.toString() ?? ''}
              placeholder="계좌를 선택해주세요."
              options={ACCOUNTS}
              onValueChange={(v) => field.onChange(v)}
            />
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <Select
              value={form.watch('categoryId')?.toString() ?? ''}
              placeholder="카테고리를 선택해주세요."
              options={CATEGORIES}
              onValueChange={(v) => field.onChange(v)}
            />
          )}
        />
        <FormField
          control={form.control}
          name="money"
          render={({ field }) => (
            <Input
              value={form.watch('money') ?? ''}
              type="number"
              placeholder="금액을 입력해주세요."
              onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
            />
          )}
        />
        <FormField
          control={form.control}
          name="datetime"
          render={({ field }) => (
            <FormControl>
              <DatePicker
                initValue={form.watch('datetime')}
                onOpenChange={(date) =>
                  field.onChange(format(date, `yyyy-MM-dd'T'HH:mm:ss`))
                }
              />
            </FormControl>
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
  } = useModifyFormContext()

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

export const ModifySummaryForm = {
  Form: FormUI,
  SubmitButton,
  Provider,
}
