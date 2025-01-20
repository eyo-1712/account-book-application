import { SelectProps as RadixSelectProps } from '@radix-ui/react-select'

interface Option {
  label: string
  value: string
}

export interface SelectProps extends RadixSelectProps {
  placeholder: string
  options: Option[]
  disabledValue?: string
}
