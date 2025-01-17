import { useMutation } from '@tanstack/react-query'
import { apiAuthGoogle } from '.'

export function useApiAuthGoogle() {
  return useMutation({
    mutationFn: apiAuthGoogle,
  })
}
