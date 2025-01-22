import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCreateSummary } from '.'

export const useApiCreateSummary = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiCreateSummary,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['summary'] })
    },
  })
}
