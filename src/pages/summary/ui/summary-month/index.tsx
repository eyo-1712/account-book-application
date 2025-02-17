import { Back, CreateSummary } from 'features/router'
import { useSearchParams } from 'react-router'
import { Separator } from 'shadcn/components/ui/separator'
import { AppBar, Body, Container } from 'shared/ui'
import { SummaryMonth, SummaryTotal } from 'widgets'

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
        <SummaryTotal />
        <br />
        <Separator />
        <br />
        <SummaryMonth />
      </Body>
    </Container>
  )
}
