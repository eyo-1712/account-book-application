import { Summary } from '.'

export default {
  component: Summary,
  title: 'Summary',
  tags: ['Widgets', 'Summary', 'Account'],
}

export const Plus = {
  args: {
    price: 20000,
    reason: 'snack24',
  },
}

export const Minus = {
  args: {
    price: -20000,
    reason: 'snack24',
  },
}
