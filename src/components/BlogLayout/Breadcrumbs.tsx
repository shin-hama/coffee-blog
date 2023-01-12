import * as React from 'react'

import MuiBreadcrumbs from '@mui/material/Breadcrumbs'

import { IPost } from '../../@types/verify-types'
import { Link } from '../Link'

type Props = {
  currentPost: IPost
}
const Breadcrumbs: React.FC<Props> = ({ currentPost }) => {
  return (
    <MuiBreadcrumbs>
      <Link href='/'>home</Link>
      <Link href='/'>{currentPost.fields.title}</Link>
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs
