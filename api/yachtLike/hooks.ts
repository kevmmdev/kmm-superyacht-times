import { useQuery } from '@tanstack/react-query'
import { searchYatchLikes, YachtSearchPayload } from './yachtLikeApi'

export const useYachtSearch = (params: YachtSearchPayload) => {
  return useQuery({
    queryKey: ['yacht-search', params],
    queryFn: () => searchYatchLikes(params),
    enabled: !!params.searchTerm || !!params.buildYear,
  })
}