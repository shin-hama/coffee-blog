import {
  ContentfulClientApi,
  CreateClientParams,
  createClient
} from 'contentful'

import {
  contentfulAccessToken,
  contentfulApiHost,
  contentfulEnvironment,
  contentfulSpaceId
} from './config'

export const getClient = (): ContentfulClientApi => {
  const accessToken = contentfulAccessToken
  const host = contentfulApiHost

  if (!contentfulSpaceId || !accessToken) {
    throw Error('CONTENTFUL api keys are empty')
  }
  const config: CreateClientParams = {
    space: contentfulSpaceId,
    accessToken: accessToken,
    environment: contentfulEnvironment,
    host: host
  }

  return createClient(config)
}
