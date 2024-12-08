import { Back } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'

export const FixedDetailPage = () => (
  <Container>
    <AppBar title="고정지출명" leading={<Back />} />
    <Body>
      <p>TEST</p>
    </Body>
  </Container>
)
