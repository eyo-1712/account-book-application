import { useMutation } from '@tanstack/react-query'
import { apiGoogleAuth } from '.'

export function useApiGoogleAuth() {
  return useMutation({ mutationFn: apiGoogleAuth })
}
