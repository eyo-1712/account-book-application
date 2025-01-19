import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCreateAccount, apiModifyAccount, apiRemoveAccount } from '.'

export const useApiCreateAccount = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiCreateAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] })
    },
  })
}

export const useApiModifyAccount = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiModifyAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] })
    },
  })
}

export const useApiRemoveAccount = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiRemoveAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] })
    },
  })
}
