import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { IPost } from '../../@types/verify-types'
import { NavLink } from '../Link'
import BorderedHead from './BorderedHead'
import Posts from './Posts'

type Props = {
  header: string
  posts: Array<IPost>
  moreRef: string
}
const LatestArticles: React.FC<Props> = ({ header, posts, moreRef }) => {
  return (
    <Stack spacing={4}>
      <BorderedHead>{header}</BorderedHead>
      <Box>
        <Posts items={posts} />
      </Box>
      <Box display='flex' justifyContent='center'>
        <Button
          variant='outlined'
          color='inherit'
          LinkComponent={NavLink}
          href={moreRef}
        >
          See More
        </Button>
      </Box>
    </Stack>
  )
}

export default LatestArticles
