import { IPost } from '../@types/verify-types'

export const buildPostUrl = (post: IPost): string => {
  return `/${post.sys.contentType.sys.id}s/${post.fields.slug}`
}
