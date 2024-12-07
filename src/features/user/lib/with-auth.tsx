import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'shared/lib'

export const withNoAuth =
  (Component: React.ComponentType) =>
  // eslint-disable-next-line react/function-component-definition
  <P extends object>(props: P) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = useSelector((state: any) => state.user.id)
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
    const user = useSelector((state: any) => state.user.id)
    const router = useRouter()

    React.useEffect(() => {
      if (!user) router.nav.login()
    }, [router.nav, user])

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />
  }
