import { useMutation } from '@tanstack/react-query'
import { apiGoogleAuth } from '.'

export const useApiGoogleAuth = () => useMutation({ mutationFn: apiGoogleAuth })
