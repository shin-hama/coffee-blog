import * as React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Entry } from 'contentful'

import { ICafeFields } from '../../src/@types/contentful'
import { IPost, isPostEntry } from '../../src/@types/verify-types'
import CafePage from '../../src/components/CafePage'
import Layout from '../../src/components/Layout'
import EntryLinkCard from '../../src/components/contentful/EntryLinkCard'
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

const Cafe: React.FC<Props> = ({ page, items }) => {
  if (!page) {
    return <></>
  }

  return (
    <Layout title={page.fields.title}>
      <CafePage {...page.fields} />
      {items.length > 0 && (
        <Stack spacing={2}>
          <Typography variant='h2'>おすすめ記事</Typography>
          {items.map((item) => (
            <EntryLinkCard key={item.sys.id} {...item} />
          ))}
        </Stack>
      )}
    </Layout>
  )
}

export default Cafe
