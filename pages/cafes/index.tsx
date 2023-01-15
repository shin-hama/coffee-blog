import * as React from 'react'
import { GetStaticProps } from 'next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ICafe } from '../../src/@types/contentful'
import Posts from '../../src/components/HomePage/Posts'
import Layout from '../../src/components/Layout'
import { getAllCafes } from '../../src/lib/get-cafes'

type Props = {
  posts: Array<ICafe>
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllCafes()
  return { props: { posts } }
}

const Cafes: React.FC<Props> = ({ posts }) => {
  return (
    <Layout title='All cafe logs'>
      <Stack spacing={4}>
        <Typography variant='h2'>All Cafe Logs</Typography>
        <Box>
          <Posts items={posts} />
        </Box>
      </Stack>
    </Layout>
  )
}

export default Cafes
