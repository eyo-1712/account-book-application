import { useApiFetchAccounts } from 'entities'
import { Back } from 'features/router'
import { AppBar, Body, Button, Container, Form, Input, Select } from 'shared/ui'

export const AccountTransferPage = () => {
  const { data, isSuccess } = useApiFetchAccounts()

  const render = (isSuccess ? data : []).map((r) => ({
    label: r.name,
    value: `${r.id}`,
  }))

  return (
    <Container>
      <AppBar
        title="계좌 이체"
        leading={<Back />}
        actions={<Button color="blue">이체</Button>}
      />
      <Body>
        <Form>
          <Select placeholder="보낼 계좌를 선택하세요" options={render} />
          <Select placeholder="받을 계좌를 선택하세요" options={render} />
          <Input type="number" placeholder="금액을 입력하세요." />
        </Form>
      </Body>
    </Container>
  )
}
