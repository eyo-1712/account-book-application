import { useApiFetchCategory } from 'entities'
import { useApiRemoveCategory } from 'entities/category/mutation'
import { Back, ModifyCategory } from 'features/router'
import { useParams } from 'react-router'
import { useRouter } from 'shared/lib'
import { AppBar, Body, Button, ButtonGroup, Container } from 'shared/ui'
import { SummaryToday } from 'widgets'

export const CategoryDetailPage = () => {
  const params = useParams()

  const { data: category } = useApiFetchCategory(params?.id ?? '')

  const removeCategory = useApiRemoveCategory()
  const router = useRouter()

  return (
    <Container>
      <AppBar
        leading={<Back />}
        actions={
          <ButtonGroup>
            <ModifyCategory id={category?.id ?? 0} />
            <Button
              color="red"
              onClick={() =>
                removeCategory.mutate(category?.id ?? 0, {
                  onSuccess: router.nav.back,
                })
              }
            >
              삭제
            </Button>
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
