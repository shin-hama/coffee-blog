import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IBlog, ICafe } from '../../@types/contentful'
import AdSense from '../AdSense'
import { NavLink } from '../Link'
import Posts from './Posts'

type Props = {
  blogs: Array<IBlog>
  cafes: Array<ICafe>
}
const HomePage: React.FC<Props> = ({ blogs, cafes }) => {
  return (
    <Stack spacing={4}>
      <Typography variant='h2'>Blog</Typography>
      <Box>
        <Posts items={blogs} />
      </Box>
      <Box display='flex' justifyContent='center'>
        <Button
          variant='outlined'
          color='inherit'
          LinkComponent={NavLink}
          href='/blogs'
        >
          See More
        </Button>
      </Box>
      <Typography variant='h2'>Cafe Log</Typography>
      <Box>
        <Posts items={cafes} />
      </Box>
      <Box display='flex' justifyContent='center'>
        <Button
          variant='outlined'
          color='inherit'
          LinkComponent={NavLink}
          href='/cafes'
        >
          See More
        </Button>
      </Box>
      <AdSense unitType='display' />
    </Stack>
  )
}

export default HomePage
