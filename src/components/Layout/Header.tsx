import * as React from 'react'

import AppBar from '@mui/material/AppBar'
import Slide from '@mui/material/Slide'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import { NavLink } from '../Link'

const Header = () => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      <AppBar color='inherit'>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <NavLink href={'/'}>
            <Typography fontFamily={"'Dela Gothic One'"} variant='h5'>
              コーヒージャンキー
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}

export default Header
