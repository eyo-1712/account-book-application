import { Back } from 'features/router'
import { AppBar, Body, Button, Container } from 'shared/ui'
import { SummaryToday } from 'widgets'

export const FixedDetailPage = () => (
  <Container>
    <AppBar
      title="고정지출명"
      leading={<Back />}
      actions={<Button color="blue">편집</Button>}
    />
    <Body>
      <p className="font-bold">12일 마다 반복</p>
      <br />
      <p className="text-sm text-gray-600">카테고리 - 고정지출</p>
      <p className="font-bold text-lg">30,000 원</p>

      <br />
      <div className="flex flex-col gap-8">
        <SummaryToday date={new Date()} />
        <SummaryToday date={new Date()} />
        <SummaryToday date={new Date()} />
      </div>
    </Body>
  </Container>
)
