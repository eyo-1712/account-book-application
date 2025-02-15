import { SummaryToday } from '.'

export default {
  component: SummaryToday,
  title: 'SummaryToday',
  tags: ['Widgets', 'Summary', 'Today'],
}

export const Today = {
  args: {
    date: 15,
    summaries: [
      {
        id: 4,
        uid: 'ziYcusb7zFM9G4p1nELc9VJLg0D2',
        type: 'expenditure',
        money: 1200,
        datetime: '2025-01-31T15:00:00.000Z',
        accountId: 1,
        categoryId: 1,
        createdAt: '2025-02-15T11:46:29.133Z',
        updatedAt: '2025-02-15T11:46:29.133Z',
        deleted: false,
        category: {
          id: 1,
          uid: 'ziYcusb7zFM9G4p1nELc9VJLg0D2',
          name: '식비',
          sort: 1,
          createdAt: '2025-01-18T12:48:37.935Z',
          updatedAt: '2025-01-18T12:48:37.935Z',
          deleted: false,
        },
        account: {
          id: 1,
          uid: 'ziYcusb7zFM9G4p1nELc9VJLg0D2',
          number: '940302-00-453838',
          name: '국민은행',
          money: 26400,
          createdAt: '2025-01-19T12:28:46.901Z',
          updatedAt: '2025-01-21T12:36:45.463Z',
          deleted: false,
        },
      },
      {
        id: 2,
        uid: 'ziYcusb7zFM9G4p1nELc9VJLg0D2',
        type: 'expenditure',
        money: 600000,
        datetime: '2025-02-09T15:00:00.000Z',
        accountId: 1,
        categoryId: 2,
        createdAt: '2025-02-15T06:32:28.660Z',
        updatedAt: '2025-02-15T06:32:28.660Z',
        deleted: false,
        category: {
          id: 2,
          uid: 'ziYcusb7zFM9G4p1nELc9VJLg0D2',
          name: '주거비',
          sort: 2,
          createdAt: '2025-01-18T12:49:55.431Z',
          updatedAt: '2025-01-18T12:49:55.431Z',
          deleted: false,
        },
        account: {
          id: 1,
          uid: 'ziYcusb7zFM9G4p1nELc9VJLg0D2',
          number: '940302-00-453838',
          name: '국민은행',
          money: 26400,
          createdAt: '2025-01-19T12:28:46.901Z',
          updatedAt: '2025-01-21T12:36:45.463Z',
          deleted: false,
        },
      },
    ],
  },
}
