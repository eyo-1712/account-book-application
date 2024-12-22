import { Select } from '.'

export default {
  component: Select,
  title: 'Select',
  tags: ['Shared'],
}

export const Default = {
  args: {
    placeholder: '입력하세염',
    options: [
      { label: '은행1', value: 'bank' },
      { label: '은행2', value: 'bank' },
      { label: '은행3', value: 'bank' },
    ],
  },
}
