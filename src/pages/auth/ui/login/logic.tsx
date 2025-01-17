import { useApiAuthGoogle } from 'entities'
import { userStore } from 'features/user'

export const useLogic = () => {
  const logIn = userStore((state) => state.action.logIn)
  const apiAuthGoogle = useApiAuthGoogle()

  const handleLogin = () => {
    apiAuthGoogle.mutate(undefined, { onSuccess: () => logIn() })
  }

  return {
    handler: {
      logIn: handleLogin,
    },
  }
}
