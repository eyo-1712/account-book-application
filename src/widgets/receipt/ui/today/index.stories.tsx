import { ReceiptToday } from '.'

export default {
  component: ReceiptToday,
  title: 'ReceiptToday',
  tags: ['Widgets', 'Receipt', 'Account'],
}

export const Today = {
  args: {
    date: new Date(),
  },
}
