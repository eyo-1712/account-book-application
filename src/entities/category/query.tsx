import { useQuery } from '@tanstack/react-query'
import { DynamicQuery } from 'shared/types'
import { apiFetchCategories, apiFetchCategory, Category } from '.'
import { SuccessResponse } from '../type'

export const useApiFetchCategories = () =>
  useQuery<SuccessResponse<Category[]>, Error, Category[]>({
    queryKey: ['category'],
    queryFn: apiFetchCategories,
    select: ({ data }) => data,
  })

export const useApiFetchCategory = ({ id }: Pick<DynamicQuery, 'id'>) =>
  useQuery<SuccessResponse<Category>, Error, Category>({
    queryKey: ['category', `${id}`],
    queryFn: () => apiFetchCategory({ id }),
    select: ({ data }) => data,
  })
