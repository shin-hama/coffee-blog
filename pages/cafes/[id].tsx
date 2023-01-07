import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Entry } from 'contentful'

import { ICafeFields } from '../../src/@types/contentful'
import CafePage from '../../src/components/CafePage'
import Layout from '../../src/components/Layout'
import { getCafeContent } from '../../src/lib/get-cafe-content'

type Props = {
  page: Entry<ICafeFields>
}
export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const [id] = [props.params?.id].flat(1)

  if (id) {
    try {
      const page = await getCafeContent(id)
      return { props: { page } }
    } catch (e) {
      console.error('test')
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

const Cafe: React.FC<Props> = (props) => {
  if (!props.page) {
    return <></>
  }

  return (
    <Layout title={props.page.fields.name}>
      <CafePage {...props.page.fields} />
    </Layout>
  )
}

export default Cafe
