import { useMutation } from '@tanstack/react-query'
import { apiCreateCategory } from '.'

export function useApiCreateCategory() {
  return useMutation({ mutationFn: apiCreateCategory })
}
