import { getMonth, getYear } from 'date-fns'
import { generateSummaryGroup, useApiFetchSummaryByDate } from 'entities'
import { useSearchParams } from 'react-router'

import { SummaryToday } from '../today'

export const SummaryMonth = () => {
  const [params] = useSearchParams()
  const today = new Date()

  const year = parseInt(params.get('year') ?? getYear(today).toString(), 10)
  const month = parseInt(params.get('month') ?? getMonth(today).toString(), 10)

  const { data } = useApiFetchSummaryByDate({ year, month })

  const summaryGroup = generateSummaryGroup(data)

  return (
    <div className="flex flex-col w-full gap-8">
      {Object.entries(summaryGroup)
        .sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10))
        .map(([date, summaries]) => (
          <SummaryToday
            key={`${year}. ${month}. ${date}`}
            summaries={summaries}
            date={date}
          />
        ))}
    </div>
  )
}
