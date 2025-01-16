import {
  Calendar,
  ChartSpline,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Folder,
  FolderPlus,
  LogOut,
  Menu,
  Minus,
  Wallet,
  X,
} from 'lucide-react'
import { IconProps } from './type'

export const Icon = (props: IconProps) => {
  const Lucide = {
    back: ChevronLeft,
    left: ChevronLeft,
    right: ChevronRight,
    close: X,
    chart: ChartSpline,
    calendar: Calendar,
    card: CreditCard,
    category: Folder,
    'create-category': FolderPlus,
    menu: Menu,
    'remove-form': Minus,
    wallet: Wallet,
    logout: LogOut,
  }[props.type]

  return <Lucide className="size-4" />
}

/**
 * https://ant.design/components/icon
 */
