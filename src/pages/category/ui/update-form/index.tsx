import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { UpdateCategoryForm } from 'widgets'

export const UpdateCategoryFormPage = () => (
  <UpdateCategoryForm.Provider>
    <Container>
      <AppBar
        title="카테고리 수정"
        leading={<Back />}
        actions={<UpdateCategoryForm.SubmitButton />}
      />
      <Body>
        <UpdateCategoryForm.Form />
      </Body>
    </Container>
  </UpdateCategoryForm.Provider>
)
