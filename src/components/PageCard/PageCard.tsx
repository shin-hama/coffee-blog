import * as React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import ContentfulImage from '../ContentfulImage'

type Props = {
  img?: string
  title: string
}
const PageCard: React.FC<Props> = ({ img, title }) => {
  return (
    <Card>
      {img && (
        <CardMedia sx={{ height: '250px' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <ContentfulImage
              src={img}
              alt=''
              priority={true}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </CardMedia>
      )}
      <CardContent>
        <Stack spacing={1}>
          <Typography variant='subtitle1'>{title}</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PageCard