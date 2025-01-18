import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCreateCategory, apiModifyCategory } from '.'

export function useApiCreateCategory() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiCreateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
    },
  })
}

export function useApiModifyCategory() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiModifyCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
    },
  })
}
