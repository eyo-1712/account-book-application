interface Option {
  label: string
  value: string
}

export interface SelectProps {
  placeholder: string
  options: Option[]
}
