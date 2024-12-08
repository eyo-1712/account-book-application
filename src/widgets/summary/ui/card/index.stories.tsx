import { Summary } from '.'

export default {
  component: Summary,
  title: 'Summary',
  tags: ['Widgets', 'Summary', 'Account'],
}

export const Plus = {
  args: {
    src: 'https://picsum.photos/200',
    price: 20000,
    reason: 'snack24',
  },
}

export const Minus = {
  args: {
    src: 'https://picsum.photos/200',
    price: -20000,
    reason: 'snack24',
  },
}
