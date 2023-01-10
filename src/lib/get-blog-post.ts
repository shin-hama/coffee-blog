import { getClient } from './contentful'

export const getBlogPost = async (id: string) => {
  const contentful = getClient()

  return await contentful.getEntry<>(id, {
    content_type: 'blog'
  })
}
