import { CreateFixed } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { FixedCard, Hamburger } from 'widgets'

export const FixedListPage = () => (
  <Container>
    <AppBar
      title="고정지출 내역"
      leading={<Hamburger />}
      actions={<CreateFixed />}
    />
    <Body>
      <div className="flex flex-col w-full gap-4">
        <FixedCard />
        <FixedCard />
        <FixedCard />
        <FixedCard />
      </div>
    </Body>
  </Container>
)
