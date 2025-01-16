import React from 'react'
import { useRouter } from 'shared/lib'
import { userStore } from '../model'

export const withNoAuth =
  (Component: React.ComponentType) =>
  // eslint-disable-next-line react/function-component-definition
  <P extends object>(props: P) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = userStore((state) => state.user)
    const router = useRouter()

    React.useEffect(() => {
      if (user) router.nav.calendar()
    }, [router.nav, user])

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />
  }

export const withAuth =
  (Component: React.ComponentType) =>
  // eslint-disable-next-line react/function-component-definition
  <P extends object>(props: P) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = userStore((state) => state.user)
    const router = useRouter()

    React.useEffect(() => {
      if (!user) router.nav.login()
    }, [router.nav, user])

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />
  }
