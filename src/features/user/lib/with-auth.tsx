import { useApiAuthInfo } from 'entities'
import React from 'react'
import { useRouter } from 'shared/lib'

export const withNoAuth =
  (Component: React.ComponentType) =>
  // eslint-disable-next-line react/function-component-definition
  <P extends object>(props: P) => {
    const { data: user, isSuccess } = useApiAuthInfo()
    const router = useRouter()

    React.useEffect(() => {
      if (!isSuccess) return

      if (user) router.nav.calendar()
    }, [router.nav, user, isSuccess])

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />
  }

export const withAuth =
  (Component: React.ComponentType) =>
  // eslint-disable-next-line react/function-component-definition
  <P extends object>(props: P) => {
    const { data: user, isSuccess } = useApiAuthInfo()
    const router = useRouter()

    React.useEffect(() => {
      if (!isSuccess) return

      if (!user) router.nav.login()
    }, [router.nav, user, isSuccess])

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />
  }
