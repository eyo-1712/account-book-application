'use client'

import { format, getHours, getMinutes, setHours, setMinutes } from 'date-fns'
import { Calendar as CalendarIcon, Clock } from 'lucide-react'
import React from 'react'
import { cn } from 'shadcn/lib/utils'
import { Select } from 'shared/ui'
import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Separator } from './separator'

const HOURS = Array.from({ length: 24 }).map((_, i) => ({
  label: `${i}시`,
  value: `${i}`,
}))
const MINUTES = Array.from({ length: 60 }).map((_, i) => ({
  label: `${i}분`,
  value: `${i}`,
}))

export const DatePicker = ({
  onOpenChange,
}: {
  onOpenChange?: (date: Date) => void
}) => {
  const [date, setDate] = React.useState<Date>(new Date())

  return (
    <Popover
      onOpenChange={(v) => {
        if (v) return
        onOpenChange?.(date)
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {date ? (
            format(date, 'yyyy년 MM월 dd일 HH시 mm분')
          ) : (
            <span>시간을 선택해주세요.</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            if (!d) return
            setDate(d)
          }}
        />
        <Separator />
        <div className="flex flex-row items-center justify-center p-2 px-8">
          <Clock className="mr-2 size-4" />
          <div className="flex flex-row items-center justify-center flex-1">
            <Select
              placeholder=""
              value={getHours(date).toString()}
              options={HOURS}
              onValueChange={(v) => {
                const newDate = setHours(date, parseInt(v, 10))
                setDate(newDate)
              }}
            />
          </div>
          <div className="p-2">:</div>
          <div className="flex flex-row items-center justify-center flex-1">
            <Select
              placeholder=""
              value={getMinutes(date).toString()}
              options={MINUTES}
              onValueChange={(v) => {
                const newDate = setMinutes(date, parseInt(v, 10))
                setDate(newDate)
              }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
