import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { SuccessResponse } from 'entities/type'
import { DynamicQuery } from 'shared/types'
import {
  apiFetchSummariesByDate,
  apiFetchSummariesByTopic,
  apiFetchSummary,
  Summary,
} from '.'

export const useApiFetchSummaryByDate = ({
  year,
  month,
}: Pick<DynamicQuery, 'year' | 'month'>) =>
  useQuery<SuccessResponse<Summary[]>, Error, Summary[]>({
    queryKey: ['summary', `${year}`, `${month}`],
    queryFn: () => apiFetchSummariesByDate({ year, month }),
    select: ({ data }) => data,
  })

export const useApiFetchSummary = ({ id }: Pick<DynamicQuery, 'id'>) =>
  useQuery<SuccessResponse<Summary>, Error, Summary>({
    queryKey: ['summary', id],
    queryFn: () => apiFetchSummary({ id }),
    select: ({ data }) => data,
  })

export const useApiFetchSummaryByTopic = ({
  topic,
  topicId,
  lastId,
}: Pick<DynamicQuery, 'topic' | 'topicId'> & { lastId?: string }) =>
  useInfiniteQuery<SuccessResponse<Summary[]>, Error, Summary[]>({
    queryKey: ['summary', topic, topicId, lastId],
    queryFn: ({ pageParam }) =>
      apiFetchSummariesByTopic({ topic, topicId, lastId: pageParam }),
    initialPageParam: lastId,
    getNextPageParam: ({ data }) => data.at(-1)?.id,
    select: ({ pages }) => pages.flatMap((page) => page.data),
  })
