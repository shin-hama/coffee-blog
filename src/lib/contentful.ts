import { ContentfulClientApi, createClient, CreateClientParams } from 'contentful'
import { contentfulAccessToken, contentfulEnvironment, contentfulSpaceId } from './config'

export const getClient = (): ContentfulClientApi => {
  const config: CreateClientParams = {
    space: contentfulSpaceId,
    accessToken: contentfulAccessToken,
    environment: contentfulEnvironment,
  }

  return createClient(config)
}
