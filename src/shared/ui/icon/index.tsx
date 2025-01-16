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
import { match } from 'ts-pattern'
import { IconProps } from './type'

export const Icon = ({ type }: IconProps) =>
  match(type)
    .with('back', () => <ChevronLeft className="size-4" />)
    .with('left', () => <ChevronLeft className="size-4" />)
    .with('right', () => <ChevronRight className="size-4" />)
    .with('close', () => <X className="size-4" />)
    .with('chart', () => <ChartSpline className="size-4" />)
    .with('calendar', () => <Calendar className="size-4" />)
    .with('card', () => <CreditCard className="size-4" />)
    .with('category', () => <Folder className="size-4" />)
    .with('create-category', () => <FolderPlus className="size-4" />)
    .with('menu', () => <Menu className="size-4" />)
    .with('remove-form', () => <Minus className="size-4" />)
    .with('wallet', () => <Wallet className="size-4" />)
    .with('logout', () => <LogOut className="size-4" />)
    .exhaustive()

/**
 * https://ant.design/components/icon
 */
