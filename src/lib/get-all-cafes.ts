import { ICafeFields } from '../@types/contentful'
import { getClient } from './contentful'

export const getAllCafes = async () => {
  const contentful = getClient()

  return await contentful.getEntries<ICafeFields>({
    content_type: 'cafe',
  })
}
