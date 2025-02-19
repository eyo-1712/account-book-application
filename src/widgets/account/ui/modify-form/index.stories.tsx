import { ModifyAccountForm } from '.'

export default {
  component: () => (
    <ModifyAccountForm.Provider>
      <ModifyAccountForm.Form />
    </ModifyAccountForm.Provider>
  ),
  title: 'ModifyAccountForm',
  tags: ['Widgets', 'Account', 'Form'],
}

export const Default = {}
