import * as React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <Stack direction={["column-reverse", "row"]} justifyContent="space-between" alignItems="center">
        <Typography>Copyright 2022 - Tokyo Cafe Catalog</Typography>
        <Stack direction="row" spacing={2}>
          <SvgIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </SvgIcon>
        </Stack>
      </Stack>
    </footer>
  )
}

export default Footer
