import { Summary } from '.'

export default {
  component: Summary,
  title: 'Summary',
  tags: ['Widgets', 'Summary', 'Summary'],
}

export const Default = {
  args: {
    summary: {
      id: 2,
      uid: 'ziYcusb7zFM9G4p1nELc9VJLg0D2',
      type: 'expenditure',
      money: 600000,
      datetime: '2025-02-09T15:00:00.000Z',
      accountId: 1,
      categoryId: 2,
      createdAt: '2025-02-15T06:32:28.660Z',
      updatedAt: '2025-02-19T13:44:16.789Z',
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
  },
}

export const WithDate = {
  args: {
    summary: {
      id: 2,
      uid: 'ziYcusb7zFM9G4p1nELc9VJLg0D2',
      type: 'expenditure',
      money: 600000,
      datetime: '2025-02-09T15:00:00.000Z',
      accountId: 1,
      categoryId: 2,
      createdAt: '2025-02-15T06:32:28.660Z',
      updatedAt: '2025-02-19T13:44:16.789Z',
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
    withDate: true,
  },
}
