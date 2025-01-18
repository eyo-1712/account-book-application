import { useQuery } from '@tanstack/react-query'
import { SuccessResponse } from 'entities/type'
import { apiFetchCategories, apiFetchCategory, Category } from '.'

export function useApiFetchCategories() {
  return useQuery<SuccessResponse<Category[]>, Error, Category[]>({
    queryKey: ['category'],
    queryFn: apiFetchCategories,
    select: ({ data }) => data,
  })
}

export function useApiFetchCategory(id: string) {
  return useQuery<SuccessResponse<Category>, Error, Category>({
    queryKey: ['category', `${id}`],
    queryFn: () => apiFetchCategory(id),
    select: ({ data }) => data,
  })
}
