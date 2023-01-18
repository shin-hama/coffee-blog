import * as React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import { IBlogFields } from '../../@types/contentful'
import ContentfulImage from '../contentful/ContentfulImage'
import RichTextRenderer from '../contentful/RichTextRenderer'
import PageHeader from './PageHeader'

const BlogPost: React.FC<IBlogFields> = (post) => {
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
    </Stack>
  )
}

export default BlogPost
