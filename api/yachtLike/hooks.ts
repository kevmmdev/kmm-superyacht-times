import { useQuery } from '@tanstack/react-query'
import { searchYatchLikes, YachtSearchPayload } from './yachtLikeApi'
import { YachtSearchResponse } from './types'

export const useYachtSearch = (params: YachtSearchPayload) => {
  return useQuery<YachtSearchResponse>({
    queryKey: ['yacht-search', params],
    queryFn: () => searchYatchLikes(params),
    enabled: true,
  })
}