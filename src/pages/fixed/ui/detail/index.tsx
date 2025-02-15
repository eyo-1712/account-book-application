import { Back, ModifyFixed } from 'features/router'
import { AppBar, Body, Button, ButtonGroup, Container } from 'shared/ui'

export const FixedDetailPage = () => (
  <Container>
    <AppBar
      title="고정지출명"
      leading={<Back />}
      actions={
        <ButtonGroup>
          <ModifyFixed id="123123" />
          <Button color="red">삭제</Button>
        </ButtonGroup>
      }
    />
    <Body>
      <p className="font-bold">12일 마다 반복</p>
      <br />
      <p className="text-sm text-gray-600">카테고리 - 고정지출</p>
      <p className="text-lg font-bold">30,000 원</p>

      <br />
      {/* <div className="flex flex-col gap-8">
        <SummaryToday date={new Date()} />
        <SummaryToday date={new Date()} />
        <SummaryToday date={new Date()} />
      </div> */}
    </Body>
  </Container>
)
