import * as React from 'react'

import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IBlog } from '../../@types/contentful'

type Props = Pick<IBlog['fields'], 'tags' | 'createdAt'>
const BlogCardDetail: React.FC<Props> = ({ createdAt, tags }) => {
  return (
    <Stack spacing={2} direction='row' alignItems='center'>
      {tags?.map((tag, i) => (
        <Chip key={`${tag}-${i}`} label={tag.fields.title} />
      ))}
      <Stack direction='row' alignItems='center' spacing={0.5}>
        <FontAwesomeIcon icon={faPen} />
        <Typography variant='subtitle2'>{createdAt}</Typography>
      </Stack>
    </Stack>
  )
}

export default BlogCardDetail
