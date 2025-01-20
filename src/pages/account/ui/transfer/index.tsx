import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { TransferForm } from 'widgets'

export const AccountTransferPage = () => (
  <TransferForm.Provider>
    <Container>
      <AppBar
        title="계좌 이체"
        leading={<Back />}
        actions={<TransferForm.SubmitButton />}
      />
      <Body>
        <TransferForm.Form />
      </Body>
    </Container>
  </TransferForm.Provider>
)
