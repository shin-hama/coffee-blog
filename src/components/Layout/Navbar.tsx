import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import { NavLink } from '../Link'

const Navbar = () => {
  return (
    <Box minWidth='100%' bgcolor={(theme) => theme.palette.grey[100]}>
      <Container maxWidth='lg'>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' LinkComponent={NavLink} href='/about'>
            About
          </Button>
          <Button color='inherit' LinkComponent={NavLink} href='/blogs'>
            Blog
          </Button>
          <Button color='inherit' LinkComponent={NavLink} href='/cafes'>
            Cafe
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
