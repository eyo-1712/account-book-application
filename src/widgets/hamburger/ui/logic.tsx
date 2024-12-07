import React from 'react'

export const useLogic = () => {
  const [toggle, setToggle] = React.useState<boolean>(false)
  const [mustOpen, setMustOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    const updateMustOpen = () => {
      setMustOpen(window.innerWidth >= 640 + 160 + 160)
    }
    updateMustOpen()

    window.addEventListener('resize', updateMustOpen)

    return () => {
      window.removeEventListener('resize', updateMustOpen)
    }
  }, [])

  const handleToggle = () => {
    if (mustOpen) return

    setToggle((prev) => !prev)
  }

  return {
    value: { toggle, mustOpen },
    handler: { toggle: handleToggle },
  }
}
