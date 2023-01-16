import * as React from 'react'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import { IBlogFields } from '../../@types/contentful'
import ContentfulImage from '../contentful/ContentfulImage'
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
      <Box position='relative' width='100%' sx={{ aspectRatio: '16/9' }}>
        <ContentfulImage
          src={post.thumbnail.fields.file.url}
          alt=''
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <article>
        <RichTextRenderer doc={post.content} />
      </article>
      <PageFooter title={post.title} url={router.pathname} />
    </Stack>
  )
}

export default BlogPost
