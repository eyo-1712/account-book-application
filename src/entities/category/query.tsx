import { useQuery } from '@tanstack/react-query'
import { SuccessResponse } from 'entities/type'
import { apiFetchCategories, Category } from '.'

export function useApiFetchCategories() {
  return useQuery<SuccessResponse<Category[]>>({
    queryKey: ['category'],
    queryFn: apiFetchCategories,
  })
}
