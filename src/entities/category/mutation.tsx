import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCreateCategory, apiModifyCategory, apiRemoveCategory } from '.'

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

export function useApiRemoveCategory() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiRemoveCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
    },
  })
}
