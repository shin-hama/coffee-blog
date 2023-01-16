import { IBlog, IBlogFields } from '../@types/contentful'
import { ContentfulQuery } from '../@types/contentful-query'
import { isBlogContent } from '../@types/verify-types'
import { getClient } from './contentful'

export const getAllBlogPosts = async (
  query?: ContentfulQuery
): Promise<Array<IBlog>> => {
  const contentful = getClient()

  const posts = await contentful.getEntries<IBlogFields>({
    content_type: 'blog',
    ...query
  })

  return posts.items.filter(isBlogContent)
}

export const getLatestPosts = async () => {
  return getAllBlogPosts({ limit: 4 })
}
