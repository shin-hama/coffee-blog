if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw Error('CONTENTFUL environment is empty')
}
export const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID
export const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN
export const contentfulEnvironment = process.env.CONTENTFUL_ENVIRONMENT
