import { IPost, isPostEntry } from '../@types/verify-types'
import { getClient } from './contentful'

export const getLinkedPosts = async (id: string): Promise<Array<IPost>> => {
  const contentful = getClient()

  const linkedItems = await contentful.getEntries({
    links_to_entry: id,
    limit: 5
  })

  return linkedItems.items.filter(isPostEntry)
}
