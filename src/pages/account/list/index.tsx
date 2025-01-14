import { AppSideBar, CreateAccount } from 'features/router'
import { SidebarProvider, SidebarTrigger } from 'shadcn/components/ui/sidebar'
import { AppBar, Body, Container } from 'shared/ui'
import { AccountCard } from 'widgets'

export const AccountListPage = () => (
  <SidebarProvider>
    <AppSideBar />
    <Container>
      <AppBar
        title="자산 목록"
        leading={<SidebarTrigger />}
        actions={<CreateAccount />}
      />
      <Body>
        <AccountCard name="name" price={100} id="1" />
        <AccountCard name="name" price={100} id="2" />
        <AccountCard name="name" price={100} id="3" />
        <AccountCard name="name" price={100} id="4" />
        <AccountCard name="name" price={100} id="5" />
        <AccountCard name="name" price={100} id="6" />
        <AccountCard name="name" price={100} id="7" />
      </Body>
    </Container>
  </SidebarProvider>
)
