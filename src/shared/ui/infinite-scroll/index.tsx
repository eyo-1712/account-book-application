import { UseInfiniteQueryResult } from '@tanstack/react-query'
import React from 'react'

export const InfiniteScroll = <T extends { id: string }, K extends string>({
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
  const { data, fetchNextPage, hasNextPage } = infiniteQuery
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!ref.current || !hasNextPage) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage()
        }
      },
      { rootMargin: '100px' }, // 미리 로드하도록 설정 가능
    )

    observer.observe(ref.current)
    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect()
    }
  }, [fetchNextPage, hasNextPage])

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
