export const isDev = process.env.NODE_ENV === 'development'

export const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID
export const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN
export const contentfulEnvironment = process.env.CONTENTFUL_ENVIRONMENT
export const contentfulApiHost = process.env.CONTENTFUL_API_HOST

if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY) {
  throw Error('Google Maps Embed API key is empty')
}
export const googleMapsEmbedApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY

if (!process.env.NEXT_PUBLIC_GA_ID) {
  throw Error('GA ID is empty')
}
export const gtagId = process.env.NEXT_PUBLIC_GA_ID
