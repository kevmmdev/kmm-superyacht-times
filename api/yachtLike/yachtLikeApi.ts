import api from '../apiClient'
import { YachtSearchResponse } from './types'

export type YachtSearchPayload = {
  size?: number
  from?: number
  searchTerm?: string
  buildYear?: number
}

export const searchYatchLikes = async ({
  size = 25,
  from = 0,
  searchTerm = '',
  buildYear,
}: YachtSearchPayload): Promise<YachtSearchResponse>  => {
  const should: any[] = []; // TODO remove any

  if (searchTerm) {
    should.push(
      {
        multi_match: {
          query: searchTerm,
          fields: ['name^3', 'previous_names^2'],
          type: 'best_fields',
          fuzziness: 'AUTO',
        },
      },
      {
        prefix: {
          name: { value: searchTerm, boost: 2 },
        },
      },
      {
        prefix: {
          previous_names: { value: searchTerm, boost: 1.5 },
        },
      }
    )
  }

  if (buildYear) {
    should.push({
      term: {
        build_year: {
          value: buildYear,
          boost: 5,
        },
      },
    })
  }

  const body = {
    size,
    from,
    query: {
      bool: {
        should,
        minimum_should_match: 1,
      },
    },
  }

  const response = await api.post('/yacht_likes/search', body)
  return response.data
}
