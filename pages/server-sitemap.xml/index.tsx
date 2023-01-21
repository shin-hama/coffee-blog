import { GetServerSideProps } from 'next'

import { ISitemapField, getServerSideSitemap } from 'next-sitemap'
import path from 'path'

import { siteConfig } from '../../site.config'
import { IPost } from '../../src/@types/verify-types'
import { getAllCafes } from '../../src/lib/get-cafes'
import { getAllBlogPosts } from '../../src/lib/get-posts'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const allBlogs = await getAllBlogPosts()
  const allCafes = await getAllCafes()
  const allPosts: Array<IPost> = []
  allPosts.push(...allBlogs)
  allPosts.push(...allCafes)

  const fields: Array<ISitemapField> = allPosts.map((post) => {
    return {
      loc: path.join(
        siteConfig.siteUrl,
        `${post.sys.contentType.sys.id}s`,
        post.fields.slug
      ), // Absolute url
      lastmod: post.sys.updatedAt
      // changefreq
      // priority
    }
  })

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {
  // pass
}
