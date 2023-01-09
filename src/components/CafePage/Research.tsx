import * as React from 'react'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'

import { NavLink } from '../Link'

type Props = {
  name: string
}
const Research: React.FC<Props> = ({ name }) => {
  const query = React.useMemo(() => name.replaceAll(' ', ''), [name])
  return (
    <NavLink href={`https://www.instagram.com/explore/tags/${query}/`}>
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
    </NavLink>
  )
}

export default Research
