import * as React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Stack from '@mui/material/Stack'

import { IBlogFields } from '../../@types/contentful'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

const BlogPost: React.FC<IBlogFields> = (post) => {
  console.log(post)
  return (
    <Stack>
      <PageHeader />
      <article>{documentToReactComponents(post.content)}</article>
      <PageFooter />
    </Stack>
  )
}

export default BlogPost
