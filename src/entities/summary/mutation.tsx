import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCreateSummary, apiRemoveSummary } from '.'

export const useApiCreateSummary = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiCreateSummary,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['summary'] })
    },
  })
}

export const useApiRemoveSummary = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiRemoveSummary,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['summary'] })
    },
  })
}
