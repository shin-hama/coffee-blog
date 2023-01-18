import * as React from 'react'

import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { siteConfig } from '../../../site.config'
import SocialLinks from '../SocialLinks'

const Bio = () => {
  return (
    <Paper>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant='h6'>{siteConfig.author}</Typography>
          <Typography variant='body2'>{siteConfig.profile}</Typography>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography>follow me:</Typography>
            <SocialLinks links={siteConfig.socials} />
          </Stack>
        </Stack>
      </CardContent>
    </Paper>
  )
}

export default Bio
