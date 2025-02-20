import { useApiFetchCategory, useApiRemoveCategory } from 'entities'
import { Back, ModifyCategory } from 'features/router'
import { useParams } from 'react-router'
import { useRouter } from 'shared/lib'
import { AppBar, Body, Button, ButtonGroup, Container } from 'shared/ui'

export const CategoryDetailPage = () => {
  const params = useParams()

  const { data: category } = useApiFetchCategory({ id: params.id })

  const removeCategory = useApiRemoveCategory()
  const router = useRouter()

  const onClickRemove = () => {
    removeCategory.mutate({ id: params.id }, { onSuccess: router.nav.back })
  }

  return (
    <Container>
      <AppBar
        leading={<Back />}
        actions={
          <ButtonGroup>
            <ModifyCategory id={category?.id ?? 0} />
            <Button color="red" onClick={onClickRemove}>
              삭제
            </Button>
          </ButtonGroup>
        }
      />
      <Body>
        <p className="w-full text-gray-600">{category?.name ?? ''}</p>
        <p className="w-full text-lg font-bold">300,000 원</p>
        <br />
        {/* <div className="flex flex-col items-start w-full gap-8">
          <SummaryToday date={new Date()} />
          <SummaryToday date={new Date()} />
          <SummaryToday date={new Date()} /> 
        </div> */}
      </Body>
    </Container>
  )
}
