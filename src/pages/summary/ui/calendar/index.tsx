import { AppSideBar, CreateSummary } from 'features/router'
import { SidebarProvider, SidebarTrigger } from 'shadcn/components/ui/sidebar'
import { AppBar, Body, Container } from 'shared/ui'
import { Calendar } from 'widgets'

export const SummaryCalendarPage = () => (
  <SidebarProvider>
    <AppSideBar />
    <Container>
      <AppBar
        title="가계부"
        leading={<SidebarTrigger />}
        actions={<CreateSummary />}
      />
      <Body>
        <Calendar />
      </Body>
    </Container>
  </SidebarProvider>
)
