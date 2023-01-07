import * as React from 'react'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'

type Props = {
  name: string
}
const Research: React.FC<Props> = ({ name }) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={2}
      width='100%'
      justifyContent='stretch'
    >
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Stack direction='row' alignItems='center' spacing={1}>
            <SvgIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </SvgIcon>
            <Stack>
              <Typography># {name}</Typography>
              <Typography>Instagram の検索結果を見る</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <Stack direction='row' alignItems='center' spacing={1}>
            <SvgIcon>
              <FontAwesomeIcon icon={faLocationDot} />
            </SvgIcon>
            <Stack>
              <Typography>{name}</Typography>
              <Typography>Google Map のレビューを見る</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default Research
