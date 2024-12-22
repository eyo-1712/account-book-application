import { Back } from 'features/router'
import { AppBar, Body, Button, Container, Form, Input } from 'shared/ui'

export const AccountTransferPage = () => (
  <Container>
    <AppBar
      title="자산 목록"
      leading={<Back />}
      actions={<Button color="blue">이체</Button>}
    />
    <Body>
      <Form>
        <Input type="text" placeholder="보낼 계좌를 선택하세요." />
        <Input type="text" placeholder="받으실 계좌를 선택하세요." />
        <Input type="number" placeholder="금액을 입력하세요." />
      </Form>
    </Body>
  </Container>
)
