import { useRouter } from 'shared/lib'
import { Icon } from 'shared/ui'

export const Back = () => {
  const { nav } = useRouter()
  return (
    <button type="button" onClick={nav.back}>
      <Icon type="back" />
    </button>
  )
}
