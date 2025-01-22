import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { CreateSummaryForm } from 'widgets'

export const CreateSummaryFormPage = () => (
  <CreateSummaryForm.Provider>
    <Container>
      <AppBar
        title="거래 내역 추가"
        leading={<Back />}
        actions={<CreateSummaryForm.SubmitButton />}
      />
      <Body>
        <CreateSummaryForm.Form />
      </Body>
    </Container>
  </CreateSummaryForm.Provider>
)
