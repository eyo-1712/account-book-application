import { CreateAccount } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { AccountCard, Hamburger } from 'widgets'

export const AccountListPage = () => (
  <Container>
    <AppBar
      title="자산 목록"
      leading={<Hamburger />}
      actions={<CreateAccount />}
    />
    <Body>
      <AccountCard name="name" price={100} />
      <AccountCard name="name" price={100} />
      <AccountCard name="name" price={100} />
      <AccountCard name="name" price={100} />
      <AccountCard name="name" price={100} />
      <AccountCard name="name" price={100} />
      <AccountCard name="name" price={100} />
    </Body>
  </Container>
)
