import * as React from 'react'

import Breadcrumbs from './Breadcrumbs'
import RecommendLinks from './RecommendLinks'

type Props = {
  children: React.ReactNode
}
const BlogLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Breadcrumbs />
      {children}
      <RecommendLinks />
    </>
  )
}

export default BlogLayout
