import { useQuery } from '@tanstack/react-query'
import { SuccessResponse } from 'entities/type'
import { apiFetchSummariesByDate, Summary } from '.'

export const useApiFetchSummaryByDate = ({
  year,
  month,
}: {
  year: number
  month: number
}) =>
  useQuery<SuccessResponse<Summary[]>, Error, Summary[]>({
    queryKey: ['summary', year.toString(), month.toString()],
    queryFn: () => apiFetchSummariesByDate({ year, month }),
    select: ({ data }) => data,
  })
