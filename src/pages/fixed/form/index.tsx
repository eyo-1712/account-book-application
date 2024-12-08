import { Back } from 'features/router'
import { AppBar, Body, Button, Container } from 'shared/ui'

export const FixedFormPage = () => (
  <Container>
    <AppBar
      title="고정지출 추가"
      leading={<Back />}
      actions={<Button color="blue">추가</Button>}
    />
    <Body>
      <p>TEST</p>
    </Body>
  </Container>
)
