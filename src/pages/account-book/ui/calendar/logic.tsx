import { logOut } from 'features/user'
import { useDispatch } from 'react-redux'

export const useLogic = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
  }

  return {
    handler: {
      logOut: handleLogout,
    },
  }
}
