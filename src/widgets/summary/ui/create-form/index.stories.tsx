import { CreateSummaryForm } from '.'

export default {
  component: () => (
    <CreateSummaryForm.Provider>
      <CreateSummaryForm.Form />
    </CreateSummaryForm.Provider>
  ),
  title: 'CreateSummaryForm',
  tags: ['Widgets', 'Summary', 'Form'],
}

export const Default = {}
