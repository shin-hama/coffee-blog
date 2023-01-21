import * as React from 'react'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'
import SocialLinks from '../SocialLinks'

type Props = Pick<ICafeFields, 'city' | 'title' | 'links' | 'visited'>
const PageHeader: React.FC<Props> = ({ title, city, links, visited }) => {
  return (
    <Stack>
      <Typography variant='h2'>{title}</Typography>
      <Stack spacing={1}>
        <Stack direction='row' spacing={2}>
          <Chip label={city} />
          <Typography variant='subtitle1'>Visited at: {visited}</Typography>
        </Stack>
        <Stack alignItems='end'>
          <SocialLinks links={links} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default PageHeader
