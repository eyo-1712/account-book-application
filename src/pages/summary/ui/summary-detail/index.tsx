import { format } from 'date-fns'
import { useApiFetchSummary, useApiRemoveSummary } from 'entities'
import { Back, ModifySummary } from 'features/router'
import { useParams } from 'react-router'
import { useRouter } from 'shared/lib'
import { AppBar, Body, Button, ButtonGroup, Container } from 'shared/ui'
import { match } from 'ts-pattern'

export const SummaryDetailPage = () => {
  const params = useParams()
  const { data: summary } = useApiFetchSummary(params.id!)
  const router = useRouter()

  const removeSummary = useApiRemoveSummary()

  const onRemove = () => {
    removeSummary.mutate(params.id!, {
      onSuccess: router.nav.back,
    })
  }

  return (
    <Container>
      <AppBar
        title="상세 내역"
        leading={<Back />}
        actions={
          <ButtonGroup>
            <ModifySummary id={parseInt(params.id!, 10)} />
            <Button color="red" type="button" onClick={onRemove}>
              삭제
            </Button>
          </ButtonGroup>
        }
      />
      {summary && (
        <Body>
          <p className="font-bold text">
            {format(new Date(summary!.datetime!), 'yyyy년 MM월 dd일')}
          </p>
          <br />
          <div className="flex flex-col items-start w-full">
            <p className="text-xs">{summary.category.name}</p>
            {match(summary.type)
              .with('expenditure', () => (
                <p className="text-xl font-bold expenditure">
                  -{summary.money.toLocaleString()} 원
                </p>
              ))
              .with('income', () => (
                <p className="text-xl font-bold income">
                  {summary.money.toLocaleString()} 원
                </p>
              ))
              .exhaustive()}
          </div>
        </Body>
      )}
    </Container>
  )
}
