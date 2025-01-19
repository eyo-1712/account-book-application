import { Button } from 'shadcn/components/ui/button'
import { useRouter } from 'shared/lib'
import { Icon } from 'shared/ui'

export const Back = () => {
  const router = useRouter()
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-7 w-7"
      onClick={router.nav.back}
    >
      <Icon type="back" />
    </Button>
  )
}
