import * as React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'
import ContentfulImage from '../contentful/ContentfulImage'

type Props = Pick<ICafeFields, 'city' | 'title' | 'visited'> & {
  img?: string
}
const PageCard: React.FC<Props> = ({ img, title, city, visited }) => {
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
          <Typography variant='h2'>{title}</Typography>
          <Box>
            <Typography variant='subtitle1'>Visited at: {visited}</Typography>
            <Typography variant='subtitle1'>{city}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PageCard
