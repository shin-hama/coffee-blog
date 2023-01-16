import * as React from 'react'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'
import Links from './Links'

type Props = Pick<ICafeFields, 'city' | 'title' | 'links' | 'visited'>
const PageHeader: React.FC<Props> = ({ title, city, links, visited }) => {
  return (
    <Stack>
      <Typography variant='h2'>{title}</Typography>
      <Stack spacing={1} alignItems='end'>
        <Stack width='100%' direction='row' justifyContent='start' spacing={2}>
          <Chip label={city} />
          <Typography variant='subtitle1'>Visited at: {visited}</Typography>
        </Stack>
        <Links links={links} />
      </Stack>
    </Stack>
  )
}

export default PageHeader
