import dayjs from 'dayjs'
import { useRouter } from 'shared/lib'
import { Icon } from 'shared/ui'
import { DAY } from './constants'
import { useLogic } from './logic'

const CalendarBox = (props: {
  children: React.ReactNode
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean
}) => (
  <button
    type="button"
    className="flex flex-col items-center w-[14.28%] py-2 disabled:text-gray-400"
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children!}
  </button>
)

export const Calendar = () => {
  const { value, handler } = useLogic()
  const { nav } = useRouter()

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row items-center gap-4">
        <button type="button" onClick={handler.prev}>
          <Icon type="left" />
        </button>
        <p className="text-center">
          {value.date.year()}년{' '}
          {(value.date.month() + 1).toString().padStart(2, '\u00A0')}월
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
      <div className="flex flex-row items-center w-full justify-evenly">
        {DAY.map((day) => (
          <CalendarBox key={day}>
            <p className="text-gray-400">{day}</p>
          </CalendarBox>
        ))}
      </div>
      <div
        className="flex flex-row flex-wrap w-full justify-evenly"
        style={{ height: '30rem' }}
      >
        {value.DATE.map((date, index) => {
          const isFuture =
            date === ''
              ? true
              : dayjs(value.date)
                  .date(date as number)
                  .isAfter(dayjs(value.today), 'day')

          return (
            <CalendarBox
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onClick={nav.summaryMonth}
              disabled={isFuture}
            >
              <p className="text-center">{date}</p>
              {!isFuture && (
                <div className="flex flex-col items-center justify-center">
                  <p className="text-xs text-blue-600">{1}</p>
                  <p className="text-xs text-gray-400">{1}</p>
                </div>
              )}
            </CalendarBox>
          )
        })}
      </div>
    </div>
  )
}
