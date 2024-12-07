import { SideBar } from '.'

export default {
  component: SideBar,
  title: 'SideBar',
  tags: ['Features'],
}

export const Default = {
  args: { open: false },
}
export const Disabled = {
  args: { open: true },
}
