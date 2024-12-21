import { CreateAccount } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
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
        <input
          type="text"
          className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
          placeholder="자산 이름을 적어주세요."
        />
        <input
          type="number"
          placeholder="잔액을 입력하세요."
          className="w-full py-1 border border-t-0 focus:outline-none border-b-gray-300 border-x-0 focus:border-b-gray-600"
        />
      </form>
    </Body>
  </Container>
)
