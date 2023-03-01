import * as React from 'react'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'
import SocialLinks from '../SocialLinks'

type Props = Pick<
  ICafeFields,
  'city' | 'title' | 'links' | 'subTitle' | 'visited'
>
const PageHeader: React.FC<Props> = ({
  title,
  city,
  links,
  subTitle,
  visited
}) => {
  return (
    <Stack spacing={1} alignItems='center' width='100%'>
      <Typography variant='h2'>{title}</Typography>
      <Typography variant='h6'>{subTitle}</Typography>
      <Stack direction='row' spacing={2}>
        <Chip label={city} />
        <Typography variant='subtitle1'>Visited at: {visited}</Typography>
      </Stack>
      <Stack width='100%' alignItems='end'>
        <SocialLinks links={links} />
      </Stack>
    </Stack>
  )
}

export default PageHeader
