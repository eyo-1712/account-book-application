import { Back } from 'features/router'
import { ModifyAccount } from 'features/router/ui/modify-account'
import {
  AppBar,
  Body,
  Button,
  ButtonGroup,
  Container,
  InfiniteScroll,
} from 'shared/ui'
import { Summary } from 'widgets'
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
          <p className="w-full font-bold text-gray-400">
            {value.account?.number}
          </p>
          <p className="w-full text-lg font-bold">잔액</p>
          <p className="w-full text-lg font-bold income">
            {value.account?.money.toLocaleString()} 원
          </p>
        </div>
        <br />
        <InfiniteScroll
          infiniteQuery={value.infiniteSummariesByCategory}
          keyName="summary"
          Component={Summary}
          componentProps={{ withDate: true }}
        />
      </Body>
    </Container>
  )
}
