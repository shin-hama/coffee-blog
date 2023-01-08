import * as React from 'react'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'

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
          <SvgIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </SvgIcon>
        </Stack>
      </Stack>
    </footer>
  )
}

export default Footer
