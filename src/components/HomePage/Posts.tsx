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
        <React.Fragment key={item.sys.id}>
          <Grid item xs={12} sm={6} md={4}>
            <PageCardLink {...item} />
          </Grid>
          {i === Math.ceil(items.length / 2) - 1 && (
            <Grid item xs={12} sm={6} md={4}>
              <AdSense unitType='infeed' />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  )
}

export default Posts
