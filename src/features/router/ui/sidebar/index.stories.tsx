import { SideBar } from '.'

export default {
  component: SideBar,
  title: 'SideBar',
  tags: ['Features'],
}

export const Default = {
  args: { open: true },
}
export const Disabled = {
  args: { open: false },
}
