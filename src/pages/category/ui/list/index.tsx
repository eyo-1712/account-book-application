import { BackButton } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'

export const CategoryListPage = () => (
  <Container>
    <AppBar title="범주" leading={<BackButton />} />
    <Body>
      <p>범주</p>
    </Body>
  </Container>
)
