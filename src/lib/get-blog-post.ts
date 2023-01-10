import { IBlogFields } from '../@types/contentful'
import { getClient } from './contentful'

export const getBlogPost = async (id: string) => {
  const contentful = getClient()

  return await contentful.getEntry<IBlogFields>(id, {
    content_type: 'blog'
  })
}
