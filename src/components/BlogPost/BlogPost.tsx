import * as React from 'react'
import { useRouter } from 'next/router'

import Stack from '@mui/material/Stack'

import { IBlogFields } from '../../@types/contentful'
import RichTextRenderer from '../contentful/RichTextRenderer'
import PageFooter from './PageFooter'
import PageHeader from './PageHeader'

const BlogPost: React.FC<IBlogFields> = (post) => {
  const router = useRouter()
  return (
    <Stack>
      <PageHeader
        title={post.title}
        createdAt={post.createdAt}
        updatedAt={post.updatedAt}
        tags={post.tags?.map((tag) => tag.fields.title)}
      />
      <article>
        <RichTextRenderer doc={post.content} />
      </article>
      <PageFooter title={post.title} url={router.pathname} />
    </Stack>
  )
}

export default BlogPost
