import { DynamicQuery } from 'shared/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateQuery = (params: DynamicQuery) =>
  `?${Object.entries(params)
    .filter(([, value]) => value)
    .reduce((a, [key, value]) => `${a}&${key}=${value}`, '')
    .slice(1)}`
