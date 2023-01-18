import {
  ContentfulClientApi,
  CreateClientParams,
  createClient
} from 'contentful'

import {
  contentfulAccessToken,
  contentfulEnvironment,
  contentfulPreviewAccessToken,
  contentfulSpaceId
} from './config'

export const getClient = (): ContentfulClientApi => {
  let accessToken
  let host = undefined
  if (process.env.NODE_ENV === 'development') {
    accessToken = contentfulPreviewAccessToken
    host = 'preview.contentful.com'
  } else {
    accessToken = contentfulAccessToken
  }
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
