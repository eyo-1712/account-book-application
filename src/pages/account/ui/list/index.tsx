import { useApiFetchAccounts } from 'entities'
import { AppSideBar, CreateAccount } from 'features/router'
import { SidebarProvider, SidebarTrigger } from 'shadcn/components/ui/sidebar'
import { AppBar, Body, Container } from 'shared/ui'
import { AccountCard } from 'widgets'

export const AccountListPage = () => {
  const { data, isSuccess } = useApiFetchAccounts()

  const render = isSuccess ? data : []

  return (
    <SidebarProvider>
      <AppSideBar />
      <Container>
        <AppBar
          title="자산 목록"
          leading={<SidebarTrigger />}
          actions={<CreateAccount />}
        />
        <Body>
          {render.map((account) => (
            <AccountCard account={account} key={account.id} />
          ))}
        </Body>
      </Container>
    </SidebarProvider>
  )
}
