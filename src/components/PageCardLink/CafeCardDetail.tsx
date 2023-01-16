import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'

type Props = Pick<ICafeFields, 'city' | 'visited'>
const CafeCardDetail: React.FC<Props> = ({ city, visited }) => {
  return (
    <Box>
      <Typography variant='subtitle1'>Visited at: {visited}</Typography>
      <Typography variant='subtitle1'>{city}</Typography>
    </Box>
  )
}

export default CafeCardDetail
