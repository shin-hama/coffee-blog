import { IStaticPage, IStaticPageFields } from '../@types/contentful'
import { isStaticPageEntry } from '../@types/verify-types'
import { getClient } from './contentful'

export const getStaticPage = async (slug: string): Promise<IStaticPage> => {
  const contentful = getClient()

  const entries = await contentful.getEntries<IStaticPageFields>({
    content_type: 'staticPage',
    'fields.slug': slug
  })

  const page = entries.items[0]

  if (page && isStaticPageEntry(page)) {
    return page
  } else {
    throw new Error(
      `Cannot retract Blog Model content: { slug: ${slug}, content: ${entries} }`
    )
  }
}
