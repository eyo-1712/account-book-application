import { ReceiptToday } from '.'

export default {
  component: ReceiptToday,
  title: 'ReceiptToday',
  tags: ['Widget', 'Receipt'],
}

export const Test = {
  args: {
    date: new Date(),
  },
}
