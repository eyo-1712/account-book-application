import { ModifyCategoryForm } from '.'

export default {
  component: () => (
    <ModifyCategoryForm.Provider>
      <ModifyCategoryForm.Form />
    </ModifyCategoryForm.Provider>
  ),
  title: 'ModifyCategoryForm',
  tags: ['Widgets', 'Category', 'Form'],
}

export const Default = {}
