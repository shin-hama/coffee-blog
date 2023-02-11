import * as React from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

import { siteConfig } from '../../../site.config'

type Props = {
  title?: string
  description: string
  image?: string
}
const Head: React.FC<Props> = ({
  title = siteConfig.siteName,
  description,
  image
}) => {
  const router = useRouter()
  const url = React.useMemo(() => {
    return new URL(router.asPath, siteConfig.siteUrl).href
  }, [router.asPath])

  const ogpImage = React.useMemo(() => {
    return image ?? new URL('/images/default_ogp.png', siteConfig.siteUrl).href
  }, [image])

  return (
    <NextHead>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='twitter:title' content={title} />
      <meta name='description' content={description} />
      <meta name='og:description' content={description} />
      <meta name='twitter:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteConfig.siteName} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={ogpImage} />
      <meta property='twitter:image' content={ogpImage} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='fb:app_id' content='740109527714777' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='canonical' href={url} />
      <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
    </NextHead>
  )
}

export default Head
