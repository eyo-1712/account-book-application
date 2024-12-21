import { Back } from 'features/router'
import { ModifyAccount } from 'features/router/ui/modify-account'
import { AppBar, Body, Container } from 'shared/ui'
import { SummaryToday } from 'widgets'

export const AccountDetailPage = () => (
  <Container>
    <AppBar title="자산 이름" leading={<Back />} actions={<ModifyAccount />} />
    <Body>
      <p className="w-full text-lg font-bold">잔액</p>
      <p className="w-full text-lg font-bold text-blue-600">300,000 원</p>
      <br />
      <div className="flex flex-col items-start w-full gap-8">
        <SummaryToday date={new Date()} />
        <SummaryToday date={new Date()} />
        <SummaryToday date={new Date()} />
      </div>
    </Body>
  </Container>
)
