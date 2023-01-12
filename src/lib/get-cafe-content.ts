import { ICafeFields } from '../@types/contentful'
import { getClient } from './contentful'

export const getCafeContent = async (id: string) => {
  const contentful = getClient()

  return await contentful.getEntry<ICafeFields>(id, {
    content_type: 'cafe'
  })
}

export const getCafeRef = async (id: string) => {
  const contentful = getClient()

  return await contentful.getEntries({
    links_to_entry: id,
    include: 0
  })
}
