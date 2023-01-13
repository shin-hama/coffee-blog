import * as React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IBlog, ICafe } from '../../@types/contentful'
import Posts from './Posts'

type Props = {
  blogs: Array<IBlog>
  cafes: Array<ICafe>
}
const HomePage: React.FC<Props> = ({ blogs, cafes }) => {
  return (
    <Stack>
      <Typography variant='h2'>Blog</Typography>
      <Posts items={blogs} />
      <Typography variant='h2'>Cafe Log</Typography>
      <Posts items={cafes} />
    </Stack>
  )
}

export default HomePage
