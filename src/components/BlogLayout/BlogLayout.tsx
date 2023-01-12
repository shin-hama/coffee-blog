import * as React from 'react'

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
    <>
      <Breadcrumbs currentPost={post} />
      {children}
      <RecommendLinks items={recommendItems} />
    </>
  )
}

export default BlogLayout
