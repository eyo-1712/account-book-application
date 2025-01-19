import { useApiFetchAccount } from 'entities'
import { Back } from 'features/router'
import { ModifyAccount } from 'features/router/ui/modify-account'
import { useParams } from 'react-router'
import { AppBar, Body, Button, ButtonGroup, Container } from 'shared/ui'
import { SummaryToday } from 'widgets'

export const AccountDetailPage = () => {
  const params = useParams()
  const { data: account } = useApiFetchAccount(params?.id ?? '')

  return (
    <Container>
      <AppBar
        leading={<Back />}
        actions={
          <ButtonGroup>
            <ModifyAccount id={account?.id ?? 0} />
            <Button color="red">삭제</Button>
          </ButtonGroup>
        }
      />
      <Body>
        <div className="flex flex-col gap-2">
          <p className="w-full text-2xl font-bold">{account?.name}</p>
          <p className="w-full text-gray-400 font-bold">{account?.number}</p>
          <p className="w-full text-lg font-bold">잔액</p>
          <p className="w-full text-lg font-bold text-blue-600">
            {account?.money.toLocaleString()} 원
          </p>
        </div>
        <br />
        <div className="flex flex-col items-start w-full gap-8">
          <SummaryToday date={new Date()} />
          <SummaryToday date={new Date()} />
          <SummaryToday date={new Date()} />
        </div>
      </Body>
    </Container>
  )
}
