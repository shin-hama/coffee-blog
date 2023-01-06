import * as React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const PageHeader = () => {
  return (
    <Stack>
      <Typography variant='h2'>Cafe Name</Typography>
      <Typography variant='subtitle1'>Visited at: 2023-01-01</Typography>
      <Typography variant='subtitle1'>JR 国立駅から徒歩5分</Typography>
    </Stack>
  )
}

export default PageHeader
