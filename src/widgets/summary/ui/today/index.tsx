import { Summary } from '../card'
import { SummaryTodayProps } from './type'

export const SummaryToday = (props: SummaryTodayProps) => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-4">
      <p>{props.date.getDate()}일</p>
      <Summary price={20000} reason="월급" />
      <Summary price={20000} reason="월급" />
      <Summary price={20000} reason="월급" />
    </div>
  </div>
)
