import { Back } from 'features/router'
import { AppBar, Body, Button, Container, Form, Input, Select } from 'shared/ui'

export const AccountTransferPage = () => (
  <Container>
    <AppBar
      title="계좌 이체"
      leading={<Back />}
      actions={<Button color="blue">이체</Button>}
    />
    <Body>
      <Form>
        <Select placeholder="보낼 계좌를 선택하세요" options={[]} />
        <Select placeholder="받을 계좌를 선택하세요" options={[]} />
        <Input type="number" placeholder="금액을 입력하세요." />
      </Form>
    </Body>
  </Container>
)
