import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { UpdateAccountForm } from 'widgets'

export const AccountUpdateFormPage = () => (
  <UpdateAccountForm.Provider>
    <Container>
      <AppBar
        title="자산 수정 "
        leading={<Back />}
        actions={<UpdateAccountForm.SubmitButton />}
      />
      <Body>
        <UpdateAccountForm.Form />
      </Body>
    </Container>
  </UpdateAccountForm.Provider>
)
