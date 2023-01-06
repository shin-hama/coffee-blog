import * as React from 'react'

import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'

const Links = () => {
  return (
    <Stack>
      <Card>
        <CardContent>
          <Stack direction='row'>
            <SvgIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </SvgIcon>
            <Typography>@tokyo_cafe_catalog</Typography>
          </Stack>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Stack direction='row'>
            <SvgIcon>
              <FontAwesomeIcon icon={faTwitter} />
            </SvgIcon>
            <Typography>@tokyo_cafe_catalog</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default Links
