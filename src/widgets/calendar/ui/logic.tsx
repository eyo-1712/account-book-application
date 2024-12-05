import React from 'react'

export const useLogic = () => {
  const today = new Date()
  const [date, setDate] = React.useState(today)

  const startDate = new Date(date.getFullYear(), date.getMonth(), 1)
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1 - 1)

  const DATE = []
  for (let i = 0; i < startDate.getDay(); i += 1) {
    DATE.push('')
  }
  for (let i = 1; i <= endDate.getDate(); i += 1) {
    DATE.push(i)
  }
  for (let i = endDate.getDay(); i <= 6; i += 1) {
    DATE.push('')
  }

  const handlePrev = () => {
    setDate((prev) => {
      const prevMonth = new Date(prev.getFullYear(), prev.getMonth() - 1, 1)

      return prevMonth
    })
  }

  const handleNext = () => {
    setDate((prev) => {
      const nextMonth = new Date(prev.getFullYear(), prev.getMonth() + 1, 1)

      if (nextMonth > today) {
        return prev
      }

      return nextMonth
    })
  }

  return {
    value: { date, today, DATE },
    handler: {
      prev: handlePrev,
      next: handleNext,
    },
  }
}
