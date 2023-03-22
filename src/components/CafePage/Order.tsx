import * as React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { ICafeOrderFields } from '../../@types/contentful'
import ContentfulImage from '../contentful/ContentfulImage'

type Props = {
  item: ICafeOrderFields
}
const Order: React.FC<Props> = ({ item }) => {
  return (
    <Card>
      <Box position='relative' width='100%' sx={{ aspectRatio: '4/3' }}>
        <ContentfulImage
          src={item.photo.fields.file.url}
          alt=''
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <CardContent>
        <Typography variant='body1' fontWeight='bold'>
          {item.name}
        </Typography>
        <Typography variant='subtitle2'>{item.price} 円</Typography>
      </CardContent>
        <Box display='flex' flexDirection='column' px={1}>
          <Typography textAlign='end' variant='caption'>
            {item.ordered}
          </Typography>
        </Box>
    </Card>
  )
}

export default Order
