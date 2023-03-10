import { IPost, isBlogContent, isCafeContent } from '../@types/verify-types'
import { buildPostUrl } from './build-post-url'

type ParsedCardLinkProps = {
  title: string
  href: string
  img: string
  subTitle?: string
  tag?: string
  createdAt?: string
}
export const parseCardLinkProps = (post: IPost): ParsedCardLinkProps => {
  const url = buildPostUrl(post)
  const { title, thumbnail, tags } = post.fields

  if (isBlogContent(post)) {
    const { createdAt } = post.fields
    return {
      title,
      img: thumbnail.fields.file.url,
      href: url,
      tag: tags?.[0]?.fields.title,
      createdAt
    }
  } else if (isCafeContent(post)) {
    const { city, subTitle, visited } = post.fields
    return {
      title,
      subTitle,
      img: thumbnail.fields.file.url,
      href: url,
      tag: city,
      createdAt: visited
    }
  } else {
    throw new Error(`Not supported post: ${post}`)
  }
}
