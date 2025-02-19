import { getMonth, getYear, isAfter, setDate } from 'date-fns'
import { useApiFetchSummaryByDate } from 'entities/summary/query'
import { useRouter } from 'shared/lib'
import { Icon } from 'shared/ui'
import { generateSummaryGroup } from 'shared/utils/generate-summary-group'
import { DAY } from './constants'
import { useLogic } from './logic'

const CalendarBox = (props: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}) => (
  <button
    type="button"
    className="flex flex-col items-center py-2 disabled:text-gray-400"
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children!}
  </button>
)

export const Calendar = () => {
  const { value, handler } = useLogic()
  const { nav } = useRouter()

  const year = getYear(value.date)
  const month = getMonth(value.date) + 1

  const { data } = useApiFetchSummaryByDate({ year, month })

  const summaryGroup = generateSummaryGroup(data)

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row items-center gap-4">
        <button type="button" onClick={handler.prev}>
          <Icon type="left" />
        </button>
        <p className="text-center">
          {getYear(value.date)}년{' '}
          {(getMonth(value.date) + 1).toString().padStart(2, '\u00A0')}월
        </p>
        <button
          type="button"
          onClick={handler.next}
          disabled={value.hasNext}
          className="disabled:text-gray-400"
        >
          <Icon type="right" />
        </button>
      </div>
      <br />
      <div className="grid w-full grid-cols-7 gap-4">
        {DAY.map((day) => (
          <CalendarBox key={day}>
            <p className="text-gray-400">{day}</p>
          </CalendarBox>
        ))}
      </div>
      <div
        className="grid w-full grid-cols-7 gap-4"
        style={{ height: '30rem' }}
      >
        {value.DATE.map((date, index) => {
          const current = setDate(value.date, date as number)
          const isFuture = date === '' ? true : isAfter(current, new Date())

          const expenditure =
            summaryGroup[date]
              ?.filter((d) => d.type === 'expenditure')
              ?.reduce((a, b) => a + b.money, 0) ?? 0
          const income =
            summaryGroup[date]
              ?.filter((d) => d.type === 'income')
              ?.reduce((a, b) => a + b.money, 0) ?? 0

          return (
            <CalendarBox
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onClick={nav.summaryMonth({ year, month })}
              disabled={isFuture}
            >
              <p className="text-center">{date}</p>
              {!isFuture && (
                <div className="flex flex-col items-center justify-center">
                  {income !== 0 && (
                    <p className="text-xs income">+{income.toLocaleString()}</p>
                  )}
                  {expenditure !== 0 && (
                    <p className="text-xs expenditure">
                      -{expenditure.toLocaleString()}
                    </p>
                  )}
                </div>
              )}
            </CalendarBox>
          )
        })}
      </div>
    </div>
  )
}
