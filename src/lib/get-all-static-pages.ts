import { IStaticPage, IStaticPageFields } from '../@types/contentful'
import { isStaticPageEntry } from '../@types/verify-types'
import { getClient } from './contentful'

export const getAllStaticPages = async (): Promise<Array<IStaticPage>> => {
  const contentful = getClient()

  const entries = await contentful.getEntries<IStaticPageFields>({
    content_type: 'staticPage'
  })

  if (entries.items.length > 0) {
    return entries.items.filter(isStaticPageEntry)
  } else {
    throw new Error(`There are no StaticPage contents`)
  }
}
