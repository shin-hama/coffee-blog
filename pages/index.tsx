import * as React from 'react'

import { siteConfig } from '../site.config'
import { IBlog, ICafe } from '../src/@types/contentful'
import HomePage from '../src/components/HomePage'
import Layout from '../src/components/Layout'
import { getLatestCafes } from '../src/lib/get-cafes'
import { getLatestPosts } from '../src/lib/get-posts'

type Props = {
  cafes: Array<ICafe>
  posts: Array<IBlog>
}
export const getStaticProps = async () => {
  const cafes = await getLatestCafes()
  const posts = await getLatestPosts()

  return {
    props: {
      cafes,
      posts
    }
  }
}

export default function Home({ cafes, posts }: Props) {
  return (
    <Layout title={siteConfig.siteName} description={siteConfig.description}>
      <HomePage cafes={cafes} blogs={posts} />
    </Layout>
  )
}
