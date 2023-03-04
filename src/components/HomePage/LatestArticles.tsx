import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IPost } from '../../@types/verify-types'
import { NavLink } from '../Link'
import Posts from './Posts'

type Props = {
  header: string
  posts: Array<IPost>
  moreRef: string
}
const LatestArticles: React.FC<Props> = ({ header, posts, moreRef }) => {
  return (
    <Stack spacing={4}>
      <Box
        pb={2}
        sx={{
          borderBottom: (theme) => `solid 1px ${theme.palette.grey[400]}`
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography variant='h3' fontWeight={'bold'}>
            {header}
          </Typography>
          <NavLink
            href={moreRef}
            color={undefined}
            display={{ xs: 'none', md: 'initial' }}
          >
            See More {'>'}
          </NavLink>
        </Stack>
      </Box>
      <Box>
        <Posts items={posts} />
      </Box>
      <Box display={{ xs: 'flex', md: 'none' }} justifyContent='center'>
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
