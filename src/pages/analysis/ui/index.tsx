import { AppBar, Body, Container } from 'shared/ui'
import { Hamburger } from 'widgets'

export const AnalysisPage = () => (
  <Container>
    <AppBar title="지출 분석" leading={<Hamburger />} />
    <Body>
      <p>TEST</p>
    </Body>
  </Container>
)
