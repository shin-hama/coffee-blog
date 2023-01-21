import { Entry } from 'contentful'

import {
  IBlog,
  IBlogFields,
  ICafe,
  ICafeFields,
  IStaticPage,
  IStaticPageFields
} from '../@types/contentful'
import {
  isBlogContent,
  isCafeContent,
  isStaticPageEntry
} from '../@types/verify-types'
import { getClient } from './contentful'

export const getBlogPost = async (slug: string): Promise<IBlog> => {
  const page = await getPageBySlug<IBlogFields>('blog', slug)
  if (isBlogContent(page)) {
    return page
  } else {
    throw Error(`${slug} is not StaticPage`)
  }
}

export const getCafeLog = async (slug: string): Promise<ICafe> => {
  const page = await getPageBySlug<ICafeFields>('cafe', slug)
  if (isCafeContent(page)) {
    return page
  } else {
    throw Error(`${slug} is not StaticPage`)
  }
}

export const getStaticPage = async (slug: string): Promise<IStaticPage> => {
  const page = await getPageBySlug<IStaticPageFields>('staticPage', slug)
  if (isStaticPageEntry(page)) {
    return page
  } else {
    throw Error(`${slug} is not StaticPage`)
  }
}

const getPageBySlug = async <T>(
  contentType: string,
  slug: string
): Promise<Entry<T>> => {
  const contentful = getClient()

  const entries = await contentful.getEntries<T>({
    content_type: contentType,
    'fields.slug': slug
  })

  const page = entries.items[0]

  if (!page) {
    throw new Error(
      `Cannot retract content: { slug: ${slug}, contentType: ${contentType} }`
    )
  }

  return page
}
