import { Form } from '.'
import { Input } from '../input'

export default {
  component: Form,
  title: 'Form',
  tags: ['Shared'],
}

export const Default = {
  args: {
    children: (
      <>
        <Input placeholder="id" />
        <Input placeholder="pw" />
        <Input placeholder="name" />
      </>
    ),
  },
}
