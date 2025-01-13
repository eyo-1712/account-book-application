import * as shadcn from 'shadcn/components/ui/select'
import { IProps } from './type'

export const Select = ({ placeholder, options }: IProps) => (
  <shadcn.Select>
    <shadcn.SelectTrigger className="px-0 text-xl border-t-0 rounded-none shadow-none border-x-0 focus:outline-none focus:ring-0">
      <shadcn.SelectValue placeholder={placeholder} />
    </shadcn.SelectTrigger>
    <shadcn.SelectContent>
      {options.map((o) => (
        <shadcn.SelectItem key={`${o.label}_${o.value}`} value={o.value}>
          {o.label}
        </shadcn.SelectItem>
      ))}
    </shadcn.SelectContent>
  </shadcn.Select>
)
