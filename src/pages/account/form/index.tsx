import { CreateAccount } from 'features/router'
import { AppBar, Body, Container, Input } from 'shared/ui'
import { Hamburger } from 'widgets'

export const AccountFormPage = () => (
  <Container>
    <AppBar
      title="자산 추가"
      leading={<Hamburger />}
      actions={<CreateAccount />}
    />
    <Body>
      <form className="flex flex-col w-full gap-6 text-lg">
        <Input type="text" placeholder="자산 이름을 적어주세요." />
        <Input type="number" placeholder="잔액을 입력하세요." />
      </form>
    </Body>
  </Container>
)
