import { TransferForm } from '.'

export default {
  component: () => (
    <TransferForm.Provider>
      <TransferForm.Form />
    </TransferForm.Provider>
  ),
  title: 'TransferForm',
  tags: ['Widgets', 'Account', 'Form'],
}

export const Default = {}
