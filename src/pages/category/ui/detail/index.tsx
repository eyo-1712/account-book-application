import {
  useApiFetchCategory,
  useApiFetchSummaryByTopic,
  useApiRemoveCategory,
} from 'entities'
import { Back, ModifyCategory } from 'features/router'
import { useParams } from 'react-router'
import { useRouter } from 'shared/lib'
import {
  AppBar,
  Body,
  Button,
  ButtonGroup,
  Container,
  InfiniteScroll,
} from 'shared/ui'
import { Summary } from 'widgets'

export const CategoryDetailPage = () => {
  const params = useParams()

  const { data: category } = useApiFetchCategory({ id: params.id })
  const infiniteSummariesByCategory = useApiFetchSummaryByTopic({
    topic: 'categoryId',
    topicId: params.id,
  })

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
        <p className="w-full text-lg font-bold">{category?.name ?? ''}</p>
        <br />
        <InfiniteScroll
          infiniteQuery={infiniteSummariesByCategory}
          keyName="summary"
          Component={Summary}
          componentProps={{ withDate: true }}
        />
      </Body>
    </Container>
  )
}
