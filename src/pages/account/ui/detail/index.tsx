import { Back } from 'features/router'
import { ModifyAccount } from 'features/router/ui/modify-account'
import { AppBar, Body, Button, ButtonGroup, Container } from 'shared/ui'
import { SummaryToday } from 'widgets'
import { useLogic } from './logic'

export const AccountDetailPage = () => {
  const { value, handler } = useLogic()

  return (
    <Container>
      <AppBar
        leading={<Back />}
        actions={
          <ButtonGroup>
            <ModifyAccount id={value.account?.id ?? 0} />
            <Button color="red" onClick={handler.onClickRemove}>
              삭제
            </Button>
          </ButtonGroup>
        }
      />
      <Body>
        <div className="flex flex-col gap-2">
          <p className="w-full text-2xl font-bold">{value.account?.name}</p>
          <p className="w-full text-gray-400 font-bold">
            {value.account?.number}
          </p>
          <p className="w-full text-lg font-bold">잔액</p>
          <p className="w-full text-lg font-bold text-blue-600">
            {value.account?.money.toLocaleString()} 원
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
