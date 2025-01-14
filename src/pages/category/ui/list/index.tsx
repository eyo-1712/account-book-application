import { AppSideBar, CreateCategory } from 'features/router'
import { SidebarProvider, SidebarTrigger } from 'shadcn/components/ui/sidebar'
import { AppBar, Body, Container } from 'shared/ui'
import { Category } from 'widgets'

export const CategoryListPage = () => (
  <SidebarProvider>
    <AppSideBar />
    <Container>
      <AppBar
        title="카테고리 목록"
        leading={<SidebarTrigger />}
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
  </SidebarProvider>
)
