import * as React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IPost } from '../../@types/verify-types'
import EntryLinkCard from '../contentful/EntryLinkCard'

type Props = {
  items: Array<IPost>
}
const RecommendLinks: React.FC<Props> = ({ items }) => {
  return items.length > 0 ? (
    <Stack spacing={2}>
      <Typography variant='h2'>おすすめ記事</Typography>
      {items.map((item) => (
        <EntryLinkCard key={item.sys.id} {...item} />
      ))}
    </Stack>
  ) : (
    <></>
  )
}

export default RecommendLinks
