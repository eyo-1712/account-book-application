import {
  addMonths,
  endOfMonth,
  getDate,
  getDay,
  isAfter,
  startOfMonth,
  subMonths,
} from 'date-fns'
import React from 'react'

export const useLogic = () => {
  const today = new Date()
  const [date, setDate] = React.useState(today)

  const startDate = startOfMonth(date)
  const endDate = endOfMonth(date)
  const nextMonth = addMonths(date, 1)
  const hasNext = isAfter(nextMonth, today)

  const DATE = []
  for (let i = 0; i < getDay(startDate); i += 1) {
    DATE.push('')
  }
  for (let i = 1; i <= getDate(endDate); i += 1) {
    DATE.push(i)
  }
  for (let i = getDay(endDate); i <= 6; i += 1) {
    DATE.push('')
  }

  const handlePrev = () => {
    setDate((prev) => subMonths(prev, 1))
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
