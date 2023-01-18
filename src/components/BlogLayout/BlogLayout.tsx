import * as React from 'react'
import { useRouter } from 'next/router'

import Stack from '@mui/material/Stack'
import path from 'path'

import { siteConfig } from '../../../site.config'
import { IPost } from '../../@types/verify-types'
import Bio from './Bio'
import Breadcrumbs from './Breadcrumbs'
import RecommendLinks from './RecommendLinks'
import ShareButtons from './ShareButtons'

type Props = {
  post: IPost
  recommendItems: Array<IPost>
  children: React.ReactNode
}
const BlogLayout: React.FC<Props> = ({ post, recommendItems, children }) => {
  const router = useRouter()
  const url = React.useMemo(() => {
    return path.join(siteConfig.siteUrl, router.asPath)
  }, [router.asPath])

  return (
    <Stack spacing={4}>
      <Breadcrumbs currentPost={post} />
      {children}
      <Bio />
      <ShareButtons msg={post.fields.title} url={url} />
      <RecommendLinks items={recommendItems} />
    </Stack>
  )
}

export default BlogLayout
