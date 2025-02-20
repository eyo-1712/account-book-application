import { UseInfiniteQueryResult } from '@tanstack/react-query'
import React from 'react'

export const InfiniteScroll = <T extends { id: number }, K extends string>({
  infiniteQuery,
  keyName,
  Component,
  componentProps,
}: {
  infiniteQuery: UseInfiniteQueryResult<T[]>
  keyName: K
  Component: React.ComponentType<{ [key in K]: T }>
  componentProps?: Record<string, unknown>
}) => {
  const { data } = infiniteQuery
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col space-y-4">
      {data?.map((item) => (
        <Component
          key={item.id}
          {...({ [keyName]: item } as { [key in K]: T })}
          {...componentProps}
        />
      ))}
      <div ref={ref} />
    </div>
  )
}
