import * as React from 'react'

import Grid from '@mui/material/Grid'

import { IPost } from '../../@types/verify-types'
import AdSense from '../AdSense'
import PageCardLink from '../PageCardLink'

type Props = {
  items: Array<IPost>
}
const Posts: React.FC<Props> = ({ items }) => {
  return (
    <Grid container spacing={4}>
      {items.map((item, i) => (
        <>
          <Grid key={item.sys.id} item xs={12} sm={6}>
            <PageCardLink {...item} />
          </Grid>
          {i === Math.ceil(items.length / 2) && (
            <Grid key='mid-posts-ads' item xs={12} sm={6}>
              <AdSense unitType='infeed' />
            </Grid>
          )}
        </>
      ))}
    </Grid>
  )
}

export default Posts
