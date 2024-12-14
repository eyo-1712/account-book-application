import { CreateAccount } from 'features/router'
import { AppBar, Body, Container } from 'shared/ui'
import { Calendar, Hamburger } from 'widgets'

export const AccountCalendarPage = () => (
  <Container>
    <AppBar
      title="가계부"
      leading={<Hamburger />}
      actions={<CreateAccount />}
    />
    <Body>
      <Calendar />
      <div className="flex flex-col items-end w-full px-8 py-2">
        <div className="flex flex-row justify-between w-full">
          <p>시작 잔고</p>
          <p className="font-bold text-blue-600 break-keep">10,000 원</p>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>지출 금액</p>
          <p className="font-bold text-gray-400 break-kee">20,000 원</p>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>남은 잔고</p>
          <p className="font-bold text-blue-600 break-keep text-end">300 원</p>
        </div>
      </div>
    </Body>
  </Container>
)
