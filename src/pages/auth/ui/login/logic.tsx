import { apiAuthGoogle } from 'entities'
import { userStore } from 'features/user'

export const useLogic = () => {
  const logIn = userStore((state) => state.action.logIn)

  const handleLogin = async () => {
    await apiAuthGoogle()
    logIn()
  }

  return {
    handler: {
      logIn: handleLogin,
    },
  }
}
