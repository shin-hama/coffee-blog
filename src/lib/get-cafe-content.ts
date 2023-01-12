import { ICafe, ICafeFields } from '../@types/contentful'
import { isCafeContent } from '../@types/verify-types'
import { getClient } from './contentful'

export const getCafeContent = async (id: string): Promise<ICafe> => {
  const contentful = getClient()

  const content = await contentful.getEntry<ICafeFields>(id, {
    content_type: 'cafe'
  })
  if (isCafeContent(content)) {
    return content
  } else {
    throw new Error(
      `Cannot retract Cafe Model content: { id: ${id}, content: ${content} }`
    )
  }
}

export const getCafeRef = async (id: string) => {
  const contentful = getClient()

  return await contentful.getEntries({
    links_to_entry: id,
    include: 0
  })
}
