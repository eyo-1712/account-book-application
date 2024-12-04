import { ReceiptToday } from '.'

export default {
  component: ReceiptToday,
  title: 'ReceiptToday',
  tags: ['Widget', 'Receipt'],
}

export const Today = {
  args: {
    date: new Date(),
  },
}
