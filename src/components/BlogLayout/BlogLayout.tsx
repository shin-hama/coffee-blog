import * as React from 'react'

import Stack from '@mui/material/Stack'

import { IPost } from '../../@types/verify-types'
import Breadcrumbs from './Breadcrumbs'
import RecommendLinks from './RecommendLinks'

type Props = {
  post: IPost
  recommendItems: Array<IPost>
  children: React.ReactNode
}
const BlogLayout: React.FC<Props> = ({ post, recommendItems, children }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs currentPost={post} />
      {children}
      <RecommendLinks items={recommendItems} />
    </Stack>
  )
}

export default BlogLayout
