import * as React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import ContentfulImage from '../ContentfulImage'

type Props = {
  src: string
}
const Order: React.FC<Props> = ({ src }) => {
  return (
    <Card>
      <Box position='relative' width='100%' height='100%'>
        <ContentfulImage
          src={src}
          alt=''
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>
      <CardContent>
        <Typography variant='h4'>Name</Typography>
        <Typography variant='subtitle2'>500 円</Typography>
      </CardContent>
    </Card>
  )
}

export default Order
