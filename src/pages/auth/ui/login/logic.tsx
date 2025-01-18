import { useApiGoogleAuth } from 'entities'
import { userStore } from 'features/user'

export const useLogic = () => {
  const logIn = userStore((state) => state.action.logIn)
  const apiGoogleAuth = useApiGoogleAuth()

  const handleLogin = () => {
    apiGoogleAuth.mutate(undefined, { onSuccess: () => logIn() })
  }

  return {
    handler: {
      logIn: handleLogin,
    },
  }
}
