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
import { IProps } from './type'

export const Icon = (props: IProps) => {
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

  return <Lucide />
}

/**
 * https://ant.design/components/icon
 */
