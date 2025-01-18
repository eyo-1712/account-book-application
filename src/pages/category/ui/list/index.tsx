import { useApiFetchCategories } from 'entities'
import { AppSideBar, CreateCategory } from 'features/router'
import { SidebarProvider, SidebarTrigger } from 'shadcn/components/ui/sidebar'
import { AppBar, Body, Container } from 'shared/ui'
import { CategoryCard } from 'widgets'

export const CategoryListPage = () => {
  const { isSuccess, data } = useApiFetchCategories()

  const render = isSuccess ? data.data : []

  return (
    <SidebarProvider>
      <AppSideBar />
      <Container>
        <AppBar
          title="카테고리 목록"
          leading={<SidebarTrigger />}
          actions={<CreateCategory />}
        />
        <Body>
          {render.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </Body>
      </Container>
    </SidebarProvider>
  )
}
