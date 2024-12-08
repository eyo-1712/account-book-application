import { CreateCategory } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { Category, Hamburger } from 'widgets'

export const CategoryListPage = () => (
  <Container>
    <AppBar
      title="카테고리 목록"
      leading={<Hamburger />}
      actions={<CreateCategory />}
    />
    <Body>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </Body>
  </Container>
)
