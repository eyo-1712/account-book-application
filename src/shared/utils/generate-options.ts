import { Option } from '../types/option'
import { safelyGet } from './safely-get'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const generateOptions = ({
  array,
  labelKey,
  valueKey,
}: {
  array: any[]
  labelKey: string
  valueKey: string
}): Option[] =>
  array.map((item) => ({
    label: safelyGet(item, labelKey),
    value: `${safelyGet(item, valueKey)}`,
  }))
