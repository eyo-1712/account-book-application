import { SideBar } from 'features/router'
import { Icon } from 'shared/ui'
import { useLogic } from './logic'

export const Hamburger = () => {
  const { value, handler } = useLogic()

  return (
    <>
      <button type="button" onClick={handler.toggle}>
        <Icon type="menu" />
      </button>
      <SideBar open={value.toggle || value.mustOpen} onClose={handler.toggle} />
    </>
  )
}
