import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { CreateAccountForm } from 'widgets'

export const AccountFormPage = () => (
  <CreateAccountForm.Provider>
    <Container>
      <AppBar
        title="자산 추가"
        leading={<Back />}
        actions={<CreateAccountForm.SubmitButton />}
      />
      <Body>
        <CreateAccountForm.Form />
      </Body>
    </Container>
  </CreateAccountForm.Provider>
)
