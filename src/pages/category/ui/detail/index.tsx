import { useApiFetchCategory } from 'entities'
import { Back, ModifyCategory } from 'features/router'
import { useParams } from 'react-router'
import { AppBar, Body, Button, ButtonGroup, Container } from 'shared/ui'
import { SummaryToday } from 'widgets'

export const CategoryDetailPage = () => {
  const params = useParams()

  const { data: category } = useApiFetchCategory(params?.id ?? '')

  return (
    <Container>
      <AppBar
        leading={<Back />}
        actions={
          <ButtonGroup>
            <ModifyCategory id={category?.id ?? ''} />
            <Button color="red">삭제</Button>
          </ButtonGroup>
        }
      />
      <Body>
        <p className="w-full text-gray-600">{category?.name ?? ''}</p>
        <p className="w-full text-lg font-bold">300,000 원</p>
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
