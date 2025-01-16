import { userStore } from 'features/user'

export const useLogic = () => {
  const logIn = userStore((state) => state.action.logIn)

  const handleLogin = () => {
    logIn()
  }

  return {
    handler: {
      logIn: handleLogin,
    },
  }
}
