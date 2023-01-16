import * as React from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

import path from 'path'

import { siteConfig } from '../../../site.config'

type Props = {
  title?: string
  description: string
  image?: string
}
const Head: React.FC<Props> = ({
  title = siteConfig.title,
  description,
  image
}) => {
  const router = useRouter()
  const url = React.useMemo(() => {
    const pathname = router.pathname

    return path.join(siteConfig.siteUrl, pathname)
  }, [router.pathname])

  return (
    <NextHead>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='twitter:title' content={title} />
      <meta name='description' content={description} />
      <meta name='og:description' content={description} />
      <meta name='twitter:description' content={description} />
      <link rel='canonical' href={url} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteConfig.siteName} />
      <meta property='og:type' content='website' />
      {image ? (
        <>
          <meta property='og:image' content={image} />
          <meta property='twitter:image' content={image} />
          <meta property='twitter:card' content='summary_large_image' />
        </>
      ) : (
        <meta property='twitter:card' content='summary' />
      )}
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  )
}

export default Head
