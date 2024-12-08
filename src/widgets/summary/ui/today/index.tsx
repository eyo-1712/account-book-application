import { Summary } from '../card'
import { IProps } from './type'

export const SummaryToday = (props: IProps) => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col gap-4">
      <p>{props.date.getDate()}일</p>
      <Summary price={20000} reason="월급" src="https://picsum.photos/200" />
      <Summary price={20000} reason="월급" src="https://picsum.photos/200" />
      <Summary price={20000} reason="월급" src="https://picsum.photos/200" />
    </div>
  </div>
)
