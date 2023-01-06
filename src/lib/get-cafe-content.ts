import { ICafeFields } from '../@types/contentful'
import { getClient } from './contentful'

export const getCafeContent = async (id: string) => {
  const contentful = getClient()

  return await contentful.getEntry<ICafeFields>(id, {
    content_type: 'cafe'
  })
}
