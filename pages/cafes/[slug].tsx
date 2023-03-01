import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { ICafe } from '../../src/@types/contentful'
import { IPost } from '../../src/@types/verify-types'
import BlogLayout from '../../src/components/BlogLayout'
import CafePage from '../../src/components/CafePage'
import Layout from '../../src/components/Layout'
import { getAllCafes } from '../../src/lib/get-cafes'
import { getLinkedPosts } from '../../src/lib/get-linked-posts'
import { getCafeLog } from '../../src/lib/get-page-by-slug'

type Props = {
  page: ICafe
  items: Array<IPost>
}
export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const [slug] = [props.params?.slug].flat(1)

  if (slug) {
    try {
      const page = await getCafeLog(slug)
      const linkedItems = await getLinkedPosts(page.sys.id)

      return {
        props: { page, items: linkedItems }
      }
    } catch (e) {
      console.error(e)
      throw e
    }
  } else {
    throw new Error('page id is not exists')
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cafes = await getAllCafes()
  return {
    paths: cafes.map((cafe) => `/cafes/${cafe.fields.slug}`),
    fallback: true
  }
}

const Cafe: React.FC<Props> = ({ page, items }) => {
  if (!page) {
    return <></>
  }

  return (
    <Layout
      title={`${page.fields.title} - ${page.fields.subTitle}`}
      description={page.fields.description || page.fields.title}
      image={page.fields.thumbnail.fields.file.url}
    >
      <BlogLayout post={page} recommendItems={items}>
        <CafePage {...page.fields} />
      </BlogLayout>
    </Layout>
  )
}

export default Cafe
