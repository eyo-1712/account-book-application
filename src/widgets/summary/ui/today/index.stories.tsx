import { SummaryToday } from '.'

export default {
  component: SummaryToday,
  title: 'SummaryToday',
  tags: ['Widgets', 'Summary', 'Account'],
}

export const Today = {
  args: {
    date: new Date(),
  },
}
