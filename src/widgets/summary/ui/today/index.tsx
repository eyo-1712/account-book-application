import { Summary } from '../card'
import { SummaryTodayProps } from './type'

export const SummaryToday = ({ date, summaries }: SummaryTodayProps) =>
  summaries.length !== 0 ? (
    <div className="flex flex-col gap-2">
      <p>{date} 일</p>
      <div className="flex flex-col gap-2">
        {summaries.map((summary) => (
          <Summary key={summary.id} summary={summary} />
        ))}
      </div>
    </div>
  ) : (
    <div className="hidden" />
  )
