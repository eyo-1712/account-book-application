import { logIn } from 'features/user'
import { useDispatch } from 'react-redux'

export const useLogic = () => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(logIn('user_id_test'))
  }

  return {
    handler: {
      logIn: handleLogin,
    },
  }
}
