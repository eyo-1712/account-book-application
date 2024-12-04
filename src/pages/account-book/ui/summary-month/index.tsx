import { AppBar, Body, Container } from 'shared/ui'
import { ReceiptToday } from 'widgets'

export const SummaryMonthPage = () => (
  <Container>
    <AppBar title="2024.11" leading="뒤로가기" actions="추가" />
    <Body>
      <div className="flex flex-row gap-4">
        <p className="">지출금액</p>
        <p className="text-gray-600">{(10000).toLocaleString()} 원</p>
      </div>
      <div className="flex flex-row gap-4">
        <p>남은잔고</p>
        <p className="text-blue-600">{(10000).toLocaleString()} 원</p>
      </div>
      <br />
      <div className="flex flex-col gap-8">
        <ReceiptToday date={new Date()} />
        <ReceiptToday date={new Date()} />
        <ReceiptToday date={new Date()} />
      </div>
    </Body>
  </Container>
)
