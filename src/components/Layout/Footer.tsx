import * as React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <footer>
      <Stack direction={['row', "column-reverse"]}>
        <Typography>Copyright 2022 Coppla</Typography>
        <Box flexGrow={1} />
        <Stack direction="row" spacing={2}>
          <Box>instagram</Box>
        </Stack>
      </Stack>
    </footer>
  )
}

export default Footer
