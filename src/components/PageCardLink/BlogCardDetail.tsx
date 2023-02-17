import * as React from 'react'

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

import { IBlog } from '../../@types/contentful'

type Props = Pick<IBlog['fields'], 'tags' | 'createdAt'>
const BlogCardDetail: React.FC<Props> = ({ createdAt, tags }) => {
  return (
    <Box>
      {tags?.map((tag, i) => (
        <Chip key={`${tag}-${i}`} label={tag.fields.title} />
      ))}
      <Typography variant='subtitle1'>{createdAt}</Typography>
    </Box>
  )
}

export default BlogCardDetail
