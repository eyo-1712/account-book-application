import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { CreateCategoryForm } from 'widgets'

export const CategoryFormPage = () => (
  <CreateCategoryForm.Provider>
    <Container>
      <AppBar
        title="카테고리 추가"
        leading={<Back />}
        actions={<CreateCategoryForm.SubmitButton />}
      />
      <Body>
        <CreateCategoryForm.Form />
      </Body>
    </Container>
  </CreateCategoryForm.Provider>
)
