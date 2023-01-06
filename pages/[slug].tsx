import * as React from 'react'
import { GetStaticProps } from 'next'

import Layout from '../src/components/Layout'
import { getCafeContent } from '../src/lib/get-cafe-content'

export const getStaticProps: GetStaticProps = async (props) => {
  const [id] = [props.params].flat(0)
  const page = await getCafeContent(id)

  return { props: { page } }
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}
const CafePage = (props) => {
  console.log(props)
  return (
    <Layout title={'title'}>
      <div>title</div>
    </Layout>
  )
}

export default CafePage
