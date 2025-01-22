import type { SelectProps as RadixSelectProps } from '@radix-ui/react-select'
import type { Option } from '../../types/option'

export interface SelectProps extends RadixSelectProps {
  placeholder: string
  options: Option[]
  disabledValue?: string
}
