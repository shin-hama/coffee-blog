import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Entry } from 'contentful'

import { ICafeFields } from '../../src/@types/contentful'
import { IPost, isPostEntry } from '../../src/@types/verify-types'
import CafePage from '../../src/components/CafePage'
import Layout from '../../src/components/Layout'
import { getCafeContent, getCafeRef } from '../../src/lib/get-cafe-content'

type Props = {
  page: Entry<ICafeFields>
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
  console.log(props)

  return (
    <Layout title={props.page.fields.title}>
      <CafePage {...props.page.fields} />
    </Layout>
  )
}

export default Cafe
