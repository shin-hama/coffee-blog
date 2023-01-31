import { ICafe, ICafeFields } from '../@types/contentful'
import { ContentfulQuery } from '../@types/contentful-query'
import { isCafeContent } from '../@types/verify-types'
import { getClient } from './contentful'

export const getAllCafes = async (
  query?: ContentfulQuery
): Promise<Array<ICafe>> => {
  const contentful = getClient()

  const cafes = await contentful.getEntries<ICafeFields>({
    content_type: 'cafe',
    order: 'fields.visited',
    ...query
  })

  return cafes.items.filter(isCafeContent)
}

export const getLatestCafes = async () => {
  return await getAllCafes({ limit: 4 })
}
