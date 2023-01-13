import * as React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import ContentfulImage from '../contentful/ContentfulImage'

export type Props = {
  title: string
  timestamp: string
  img: string
  tags: Array<string>
}
const PageCard: React.FC<Props> = ({ title, timestamp, img, tags }) => {
  return (
    <Card>
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
      <CardContent>
        <Stack spacing={1}>
          <Typography variant='h2'>{title}</Typography>
          <Box>
            <Typography variant='subtitle1'>{timestamp}</Typography>
            {tags.map((tag, i) => (
              <Typography variant='subtitle1' key={`${tag}-${i}`}>
                {tag}
              </Typography>
            ))}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PageCard
