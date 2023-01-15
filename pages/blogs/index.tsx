import * as React from 'react'
import { GetStaticProps } from 'next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IBlog } from '../../src/@types/contentful'
import Posts from '../../src/components/HomePage/Posts'
import Layout from '../../src/components/Layout'
import { getAllBlogPosts } from '../../src/lib/get_posts'

type Props = {
  posts: Array<IBlog>
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllBlogPosts()
  return { props: { posts } }
}

const Blogs: React.FC<Props> = ({ posts }) => {
  return (
    <Layout title='All posts'>
      <Stack spacing={4}>
        <Typography variant='h2'>All Blog Posts</Typography>
        <Box>
          <Posts items={posts} />
        </Box>
      </Stack>
    </Layout>
  )
}

export default Blogs
