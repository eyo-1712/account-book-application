// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const safelyGet = (object: any, path: string) => {
  const properties = path.split('.')
  let current = object

  // eslint-disable-next-line no-restricted-syntax
  for (const property of properties) {
    if (current === undefined) {
      return undefined
    }

    current = current?.[property]
  }

  return current
}
