import { IBlog, IBlogFields } from '../@types/contentful'
import { isBlogContent } from '../@types/verify-types'
import { getClient } from './contentful'

export const getBlogPost = async (id: string): Promise<IBlog> => {
  const contentful = getClient()

  const content = await contentful.getEntry<IBlogFields>(id, {
    content_type: 'blog'
  })

  if (isBlogContent(content)) {
    return content
  } else {
    throw new Error(
      `Cannot retract Blog Model content: { id: ${id}, content: ${content} }`
    )
  }
}
