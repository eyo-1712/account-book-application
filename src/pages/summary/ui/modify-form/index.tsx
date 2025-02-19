import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { ModifySummaryForm } from 'widgets'

export const ModifySummaryFormPage = () => (
  <ModifySummaryForm.Provider>
    <Container>
      <AppBar
        title="거래 내역 수정"
        leading={<Back />}
        actions={<ModifySummaryForm.SubmitButton />}
      />
      <Body>
        <ModifySummaryForm.Form />
      </Body>
    </Container>
  </ModifySummaryForm.Provider>
)
