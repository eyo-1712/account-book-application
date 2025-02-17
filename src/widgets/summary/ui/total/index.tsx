import { getMonth, getYear } from 'date-fns'
import { useApiFetchSummaryByDate } from 'entities/summary/query'
import { useSearchParams } from 'react-router'

export const SummaryTotal = () => {
  const [params] = useSearchParams()
  const today = new Date()

  const year = parseInt(params.get('year') ?? getYear(today).toString(), 10)
  const month = parseInt(params.get('month') ?? getMonth(today).toString(), 10)
  const { data: summaries } = useApiFetchSummaryByDate({ year, month })

  const [income, expenditure] = (summaries ?? []).reduce(
    (a, b) => {
      switch (b.type) {
        case 'expenditure':
          return [a[0], a[1] + b.money]
        case 'income':
          return [a[0] + b.money, a[1]]
        default:
          return a
      }
    },
    [0, 0],
  )

  return (
    <>
      <div className="flex flex-row w-full gap-4">
        <p className="">수입</p>
        <p className="font-bold income">{income.toLocaleString()} 원</p>
      </div>
      <div className="flex flex-row w-full gap-4">
        <p>지출</p>
        <p className="font-bold expenditure">
          {expenditure.toLocaleString()} 원
        </p>
      </div>
    </>
  )
}
