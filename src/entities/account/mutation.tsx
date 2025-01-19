import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiCreateAccount } from '.'

export const useApiCreateAccount = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: apiCreateAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] })
    },
  })
}
