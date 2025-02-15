import { Back, CreateSummary } from 'features/router'
import { useSearchParams } from 'react-router'
import { Separator } from 'shadcn/components/ui/separator'
import { AppBar, Body, Container } from 'shared/ui'
import { SummaryMonth } from 'widgets'

export const SummaryMonthPage = () => {
  const [params] = useSearchParams()

  const year = params.get('year') ?? ''
  const month = params.get('month') ?? ''

  return (
    <Container>
      <AppBar
        title={`${year}. ${month.padStart(2, '0')}`}
        leading={<Back />}
        actions={<CreateSummary />}
      />
      <Body>
        <div className="flex flex-row w-full gap-4">
          <p className="">수입</p>
          <p className="font-bold income">{(10000).toLocaleString()} 원</p>
        </div>
        <div className="flex flex-row w-full gap-4">
          <p>지출</p>
          <p className="font-bold expenditure">{(10000).toLocaleString()} 원</p>
        </div>
        <br />
        <Separator />
        <br />
        <SummaryMonth />
      </Body>
    </Container>
  )
}
