import {
  ContentfulClientApi,
  CreateClientParams,
  createClient
} from 'contentful'

import {
  contentfulAccessToken,
  contentfulEnvironment,
  contentfulSpaceId
} from './config'

export const getClient = (): ContentfulClientApi => {
  if (!contentfulSpaceId || !contentfulAccessToken) {
    throw Error('CONTENTFUL api keys are empty')
  }
  const config: CreateClientParams = {
    space: contentfulSpaceId,
    accessToken: contentfulAccessToken,
    environment: contentfulEnvironment
  }

  return createClient(config)
}
