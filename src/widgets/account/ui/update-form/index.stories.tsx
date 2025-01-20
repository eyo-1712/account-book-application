import { UpdateAccountForm } from '.'

export default {
  component: () => (
    <UpdateAccountForm.Provider>
      <UpdateAccountForm.Form />
    </UpdateAccountForm.Provider>
  ),
  title: 'UpdateAccountForm',
  tags: ['Widgets', 'Account', 'Form'],
}

export const Default = {}
