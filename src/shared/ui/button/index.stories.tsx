import { Button } from '.'

export default {
  component: Button,
  title: 'Button',
  tags: ['Shared'],
}

export const Blue = {
  args: {
    children: 'button',
    color: 'blue',
  },
}
export const Red = {
  args: {
    children: 'button',
    color: 'red',
  },
}
export const Disabled = {
  args: {
    children: 'button',
    disabled: true,
  },
}
