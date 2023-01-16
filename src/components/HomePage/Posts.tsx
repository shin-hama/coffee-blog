import * as React from 'react'

import Grid from '@mui/material/Grid'

import { IPost } from '../../@types/verify-types'
import PageCardLink from '../PageCardLink'

type Props = {
  items: Array<IPost>
}
const Posts: React.FC<Props> = ({ items }) => {
  return (
    <Grid container spacing={4}>
      {items.map((item) => (
        <Grid key={item.sys.id} item xs={12} sm={6}>
          <PageCardLink {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
