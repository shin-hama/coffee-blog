import * as React from 'react'

import Stack from '@mui/material/Stack'

import { IBlog, ICafe } from '../../@types/contentful'
import AdSense from '../AdSense'
import LatestArticles from './LatestArticles'

type Props = {
  blogs: Array<IBlog>
  cafes: Array<ICafe>
}
const HomePage: React.FC<Props> = ({ blogs, cafes }) => {
  return (
    <Stack spacing={4}>
      <LatestArticles header='Blog Posts' posts={blogs} moreRef='/blogs' />
      <LatestArticles header='Cafe Log' posts={cafes} moreRef='/cafes' />
      <AdSense unitType='display' />
    </Stack>
  )
}

export default HomePage
