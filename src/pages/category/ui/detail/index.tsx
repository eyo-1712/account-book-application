import { Back } from 'features/router'
import { ModifyCategory } from 'features/router/ui/modify-category'
import { AppBar, Body, Button, ButtonGroup, Container } from 'shared/ui'
import { SummaryToday } from 'widgets'

export const CategoryDetailPage = () => (
  <Container>
    <AppBar
      title="카테고리 이름"
      leading={<Back />}
      actions={
        <ButtonGroup>
          <ModifyCategory id="123113" />
          <Button color="red">삭제</Button>
        </ButtonGroup>
      }
    />
    <Body>
      <p className="w-full text-gray-600">이번달 지출 내역</p>
      <p className="w-full text-lg font-bold">-300,000 원</p>
      <br />
      <div className="flex flex-col items-start w-full gap-8">
        <SummaryToday date={new Date()} />
        <SummaryToday date={new Date()} />
        <SummaryToday date={new Date()} />
      </div>
    </Body>
  </Container>
)
