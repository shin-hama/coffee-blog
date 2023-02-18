import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'

type Props = Pick<ICafeFields, 'city' | 'subTitle'>
const CafeCardDetail: React.FC<Props> = ({ city, subTitle }) => {
  return (
    <Box>
      <Typography variant='subtitle2'>{city}</Typography>
      {subTitle && <Typography variant='subtitle1'>{subTitle}</Typography>}
    </Box>
  )
}

export default CafeCardDetail
