import dayjs from 'dayjs'
import React from 'react'

export const useLogic = () => {
  const today = dayjs()
  const [date, setDate] = React.useState(today)

  const startDate = date.startOf('month')
  const endDate = date.endOf('month')
  const nextMonth = date.add(1, 'month')
  const hasNext = nextMonth.isAfter(today, 'month')

  const DATE = []
  for (let i = 0; i < startDate.day(); i += 1) {
    DATE.push('')
  }
  for (let i = 1; i <= endDate.date(); i += 1) {
    DATE.push(i)
  }
  for (let i = endDate.day(); i <= 6; i += 1) {
    DATE.push('')
  }

  const handlePrev = () => {
    setDate((prev) => prev.subtract(1, 'month'))
  }

  const handleNext = () => {
    setDate((prev) => {
      if (hasNext) {
        return prev
      }
      return nextMonth
    })
  }

  return {
    value: { date, today, DATE, hasNext },
    handler: {
      prev: handlePrev,
      next: handleNext,
    },
  }
}
