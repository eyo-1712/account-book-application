import { CreateAccountForm } from '.'

export default {
  component: () => (
    <CreateAccountForm.Provider>
      <CreateAccountForm.Form />
    </CreateAccountForm.Provider>
  ),
  title: 'CreateAccountForm',
  tags: ['Widgets', 'Account', 'Form'],
}

export const Default = {}
