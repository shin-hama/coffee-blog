import * as React from 'react'

import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Links from '../CafePage/Links'

const Bio = () => {
  return (
    <Paper>
      <CardContent>
        <Typography>Name</Typography>
        <Stack direction='row'>
          <Typography>follow me:</Typography>
          <Links links={['https://www.instagram.com/tokyo_cafe_catalog/']} />
        </Stack>
      </CardContent>
    </Paper>
  )
}

export default Bio
