// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateQuery = (params: { [key: string]: any }) =>
  Object.entries(params)
    .filter(([, value]) => value)
    .reduce((a, [key, value]) => `${a}${key}=${value}`, '?')
