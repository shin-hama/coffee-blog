import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { IStaticPage } from '../src/@types/contentful'
import Layout from '../src/components/Layout'
import StaticPage from '../src/components/StaticPage'
import { getAllStaticPages } from '../src/lib/get-all-static-pages'
import { getStaticPage } from '../src/lib/get-page'

type Props = {
  page: IStaticPage
}
export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const [slug] = [props.params?.slug].flat(1)

  if (slug) {
    try {
      const page = await getStaticPage(slug)
      return {
        props: { page }
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
  const entries = await getAllStaticPages()
  return {
    paths: entries.map((entry) => `/${entry.fields.slug}`),
    fallback: true
  }
}

const Page: React.FC<Props> = ({ page }) => {
  if (!page) {
    return <></>
  }

  return (
    <Layout
      title={page.fields.title}
      description={page.fields.description}
      image={page.fields.thumbnail?.fields.file.url}
    >
      <StaticPage {...page.fields} />
    </Layout>
  )
}

export default Page
