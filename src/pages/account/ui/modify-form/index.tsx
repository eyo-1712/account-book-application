import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { ModifyAccountForm } from 'widgets'

export const AccountModifyFormPage = () => (
  <ModifyAccountForm.Provider>
    <Container>
      <AppBar
        title="자산 수정 "
        leading={<Back />}
        actions={<ModifyAccountForm.SubmitButton />}
      />
      <Body>
        <ModifyAccountForm.Form />
      </Body>
    </Container>
  </ModifyAccountForm.Provider>
)
