import { ModifySummaryForm } from '.'

export default {
  component: () => (
    <ModifySummaryForm.Provider>
      <ModifySummaryForm.Form />
    </ModifySummaryForm.Provider>
  ),
  title: 'ModifySummaryForm',
  tags: ['Widgets', 'Summary', 'Form'],
}

export const Default = {}
