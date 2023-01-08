console.log(process.env)
console.log(!process.env.CONTENTFUL_SPACE_ID)
console.log(!process.env.CONTENTFUL_ACCESS_TOKEN)
if (
  typeof window === 'undefined' &&
  (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN)
) {
  throw Error('CONTENTFUL api keys are empty')
}
export const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID
export const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN
export const contentfulEnvironment = process.env.CONTENTFUL_ENVIRONMENT

if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY) {
  throw Error('Google Maps Embed API key is empty')
}
export const googleMapsEmbedApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY
