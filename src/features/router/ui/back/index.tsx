import { useRouter } from 'shared/lib'
import { Icon } from 'shared/ui'

export const BackButton = () => {
  const { nav } = useRouter()
  return (
    <button type="button" onClick={nav.back}>
      <Icon type="back" />
    </button>
  )
}
