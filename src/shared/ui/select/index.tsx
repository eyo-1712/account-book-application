import * as shadcn from 'shadcn/components/ui/select'
import { SelectProps } from './type'

export const Select = ({
  placeholder,
  options,
  disabledValue,
  ...props
}: SelectProps) => (
  <shadcn.Select {...props}>
    <shadcn.SelectTrigger className="px-0 text-lg border-t-0 rounded-none shadow-none border-x-0 focus:outline-none focus:ring-0">
      <shadcn.SelectValue placeholder={placeholder} />
    </shadcn.SelectTrigger>
    <shadcn.SelectContent>
      {options.map((o) => (
        <shadcn.SelectItem
          key={`${o.label}_${o.value}`}
          value={o.value}
          disabled={disabledValue === o.value}
        >
          {o.label}
        </shadcn.SelectItem>
      ))}
    </shadcn.SelectContent>
  </shadcn.Select>
)
