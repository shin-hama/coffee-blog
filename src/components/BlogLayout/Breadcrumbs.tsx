import * as React from 'react'

import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'

import { IPost } from '../../@types/verify-types'
import { Link } from '../Link'

type Props = {
  currentPost: IPost
}
const Breadcrumbs: React.FC<Props> = ({ currentPost }) => {
  return (
    <MuiBreadcrumbs
      sx={{ textDecoration: 'none', color: (theme) => theme.palette.grey[600] }}
    >
      <Link href='/' sx={{ color: 'inherit' }}>
        home
      </Link>
      <Typography>{currentPost.fields.title}</Typography>
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs
