import { CreateCategory } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { Hamburger } from 'widgets'

export const CategoryListPage = () => (
  <Container>
    <AppBar title="범주" leading={<Hamburger />} actions={<CreateCategory />} />
    <Body>
      <p>범주</p>
    </Body>
  </Container>
)
