import { DAY } from './constants'
import { useLogic } from './logic'

const CalendarBox = (props: React.PropsWithChildren) => (
  <div className="flex flex-col items-center w-[14.28%] py-2">
    {props.children!}
  </div>
)

export const Calendar = () => {
  const { value, handler } = useLogic()

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row items-center gap-4">
        <button type="button" onClick={handler.prev}>{`<`}</button>
        <p className="text-center">
          {value.date.getFullYear()}년{' '}
          {(value.date.getMonth() + 1).toString().padStart(2, '\u00A0')}월
        </p>
        <button type="button" onClick={handler.next}>{`>`}</button>
      </div>
      <br />
      <div className="flex flex-row items-center w-full justify-evenly">
        {DAY.map((day) => (
          <CalendarBox key={day}>
            <p className="text-gray-300">{day}</p>
          </CalendarBox>
        ))}
      </div>
      <div className="flex flex-row flex-wrap w-full justify-evenly">
        {value.DATE.map((date, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CalendarBox key={index}>
            <p className="text-center">{date}</p>
            {date !== '' && (
              <div className="flex flex-col items-center justify-center h-8">
                <p className="text-xs text-blue-600">{1}</p>
                <p className="text-xs text-gray-300">{1}</p>
              </div>
            )}
          </CalendarBox>
        ))}
      </div>
    </div>
  )
}
