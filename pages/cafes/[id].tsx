import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { ICafe } from '../../src/@types/contentful'
import { IPost, isPostEntry } from '../../src/@types/verify-types'
import BlogLayout from '../../src/components/BlogLayout'
import CafePage from '../../src/components/CafePage'
import Layout from '../../src/components/Layout'
import { getCafeContent, getCafeRef } from '../../src/lib/get-cafe-content'

type Props = {
  page: ICafe
  items: Array<IPost>
}
export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const [id] = [props.params?.id].flat(1)

  if (id) {
    try {
      const page = await getCafeContent(id)
      const ref = await getCafeRef(id)
      return {
        props: { page, items: ref.items.filter(isPostEntry) }
      }
    } catch (e) {
      console.error(e)
      throw e
    }
  } else {
    throw new Error('page id is not exists')
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

const Cafe: React.FC<Props> = ({ page, items }) => {
  if (!page) {
    return <></>
  }

  return (
    <Layout
      title={page.fields.title}
      description={page.fields.description || page.fields.title}
    >
      <BlogLayout post={page} recommendItems={items}>
        <CafePage {...page.fields} />
      </BlogLayout>
    </Layout>
  )
}

export default Cafe
