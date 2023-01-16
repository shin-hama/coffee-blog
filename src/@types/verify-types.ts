import type { IBlog, ICafe } from './contentful'

export type IPost = IBlog | ICafe

export const isBlogContent = (target: any): target is IBlog => {
  return (
    target !== null &&
    target !== undefined &&
    target.sys?.contentType?.sys?.id === 'blog'
  )
}

export const isCafeContent = (target: any): target is ICafe => {
  return (
    target !== null &&
    target !== undefined &&
    target.sys?.contentType?.sys?.id === 'cafe'
  )
}

export const isPostEntry = (target: any): target is IPost => {
  return (
    target !== null &&
    target !== undefined &&
    (target.sys?.contentType?.sys?.id === 'cafe' ||
      target.sys?.contentType?.sys?.id === 'blog')
  )
}
