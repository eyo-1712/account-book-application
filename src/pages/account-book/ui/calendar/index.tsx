import { AddAccountDetail } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { Calendar } from 'widgets'

export const AccountCalendarPage = () => (
  <Container>
    <AppBar title="가계부" actions={<AddAccountDetail />} />
    <Body>
      <Calendar />
      <div className="flex flex-col items-end w-full px-8 py-2">
        <div className="flex flex-row justify-between w-full">
          <p>시작 잔고</p>
          <p className="text-blue-600 break-keep">10,000 원</p>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>지출 금액</p>
          <p className="text-gray-600 break-keep">20,000 원</p>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>남은 잔고</p>
          <p className="text-blue-600 break-keep text-end">300 원</p>
        </div>
      </div>
    </Body>
  </Container>
)
