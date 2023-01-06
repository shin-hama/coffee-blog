import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Entry } from 'contentful'

import { ICafeFields } from '../../src/@types/contentful'
import Layout from '../../src/components/Layout'
import { getCafeContent } from '../../src/lib/get-cafe-content'

type Props = {
  page: Entry<ICafeFields>
}
export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const [id] = [props.params?.id].flat(1)
  if (id) {
    const page = await getCafeContent(id)

    return { props: { page } }
  } else {
    throw new Error()
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

const CafePage: React.FC<Props> = (props) => {
  console.log(props)
  return (
    <Layout title={'title'}>
      <div>title</div>
    </Layout>
  )
}

export default CafePage
