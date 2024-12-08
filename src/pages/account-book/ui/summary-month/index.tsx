import { BackButton, CreateAccountDetail } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { ReceiptToday } from 'widgets'

export const SummaryMonthPage = () => (
  <Container>
    <AppBar
      title="2024.11"
      leading={<BackButton />}
      actions={<CreateAccountDetail />}
    />
    <Body>
      <div className="flex flex-row w-full gap-4">
        <p className="">지출금액</p>
        <p className="font-bold text-gray-600">{(10000).toLocaleString()} 원</p>
      </div>
      <div className="flex flex-row w-full gap-4">
        <p>남은잔고</p>
        <p className="font-bold text-blue-600">{(10000).toLocaleString()} 원</p>
      </div>
      <br />
      <div className="flex flex-col w-full gap-8">
        <ReceiptToday date={new Date()} />
        <ReceiptToday date={new Date()} />
        <ReceiptToday date={new Date()} />
      </div>
    </Body>
  </Container>
)
