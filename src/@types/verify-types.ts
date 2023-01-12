import type { IBlog, ICafe } from './contentful'

export type IPost = IBlog | ICafe

export const isPostEntry = (target: any): target is IPost => {
  return (
    target !== null &&
    target !== undefined &&
    (target.sys?.contentType?.sys?.id === 'cafe' ||
      target.sys?.contentType?.sys?.id === 'blog')
  )
}
