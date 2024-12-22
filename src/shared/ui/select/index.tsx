import * as Shadcn from 'shadcn'
import { IProps } from './type'

export const Select = ({ placeholder, options }: IProps) => (
  <Shadcn.Select>
    <Shadcn.SelectTrigger className="px-0 text-xl border-t-0 rounded-none shadow-none border-x-0 focus:outline-none focus:ring-0">
      <Shadcn.SelectValue placeholder={placeholder} />
    </Shadcn.SelectTrigger>
    <Shadcn.SelectContent>
      {options.map((o) => (
        <Shadcn.SelectItem key={`${o.label}_${o.value}`} value={o.value}>
          {o.label}
        </Shadcn.SelectItem>
      ))}
    </Shadcn.SelectContent>
  </Shadcn.Select>
)
