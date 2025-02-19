import { CreateCategoryForm } from '.'

export default {
  component: () => (
    <CreateCategoryForm.Provider>
      <CreateCategoryForm.Form />
    </CreateCategoryForm.Provider>
  ),
  title: 'CreateCategoryForm',
  tags: ['Widgets', 'Category', 'Form'],
}

export const Default = {}
