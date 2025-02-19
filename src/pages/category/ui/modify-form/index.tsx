import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { ModifyCategoryForm } from 'widgets'

export const ModifyCategoryFormPage = () => (
  <ModifyCategoryForm.Provider>
    <Container>
      <AppBar
        title="카테고리 수정"
        leading={<Back />}
        actions={<ModifyCategoryForm.SubmitButton />}
      />
      <Body>
        <ModifyCategoryForm.Form />
      </Body>
    </Container>
  </ModifyCategoryForm.Provider>
)
