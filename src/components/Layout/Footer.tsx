import * as React from 'react'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'

import { NavLink } from '../Link'

const Footer = () => {
  return (
    <footer>
      <Stack
        direction={{ xs: 'column-reverse', sm: 'row' }}
        justifyContent='space-between'
        alignItems='center'
        spacing={1}
        paddingY={1}
      >
        <Typography>Copyright 2022 - Tokyo Cafe Catalog</Typography>
        <Stack direction='row' spacing={2}>
          <NavLink href='https://www.instagram.com/tokyo_cafe_catalog/'>
            <SvgIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </SvgIcon>
          </NavLink>
        </Stack>
      </Stack>
    </footer>
  )
}

export default Footer
