import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCreateSummary, apiModifySummary, apiRemoveSummary } from '.'

export const useApiCreateSummary = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiCreateSummary,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['summary'], exact: false })
    },
  })
}

export const useApiModifySummary = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiModifySummary,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['summary'], exact: false })
    },
  })
}

export const useApiRemoveSummary = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiRemoveSummary,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['summary'], exact: false })
    },
  })
}
