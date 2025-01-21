import { useApiGoogleAuth } from 'entities'

export const useLogic = () => {
  const apiGoogleAuth = useApiGoogleAuth()

  const handleLogin = () => {
    apiGoogleAuth.mutate()
  }

  return {
    handler: {
      logIn: handleLogin,
    },
  }
}
