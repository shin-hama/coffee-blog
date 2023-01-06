import * as React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import ContentfulImage from '../ContentfulImage'

type Props = {
  images: Array<string>
}
const Gallery: React.FC<Props> = ({ images }) => {
  const [index, setIndex] = React.useState(0)

  return (
    <Box width='100%' height='100vh'>
      <Stack spacing={3} padding={2}>
        <Box
          position='relative'
          color='white'
          width='100%'
          sx={{ aspectRatio: '1/1' }}
        >
          <ContentfulImage
            src={images[index]}
            alt={''}
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>

        <Stack spacing={2} direction='row' overflow={'auto'}>
          {images.map((image, i) => (
            <Box
              position='relative'
              key={image}
              bgcolor='black'
              color='white'
              onClick={() => setIndex(i)}
            >
              <ContentfulImage src={image} alt={''} width={100} height={100} />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Gallery
