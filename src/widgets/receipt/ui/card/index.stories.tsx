import { Receipt } from '.'

export default {
  component: Receipt,
  title: 'Receipt',
  tags: ['Widgets', 'Receipt', 'Account'],
}

export const Test = {
  args: {
    src: 'https://picsum.photos/200',
    price: 20000,
    reason: 'snack24',
  },
}
