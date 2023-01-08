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
    <Box width='100%' maxHeight='400px' sx={{ aspectRatio: '1/1' }}>
      <Stack spacing={2} height='100%'>
        <Box
          position='relative'
          color='white'
          height='80%'
          bgcolor={(theme) => theme.palette.text.primary}
        >
          <ContentfulImage
            src={images[index]}
            alt={''}
            fill
            style={{
              objectFit: 'contain'
            }}
          />
        </Box>
        <Stack spacing={2} direction='row' overflow={'auto'} height='20%'>
          {images.map((image, i) => (
            <Box
              position='relative'
              height='100%'
              key={image}
              sx={{ aspectRatio: '1/1' }}
              onClick={() => setIndex(i)}
            >
              <ContentfulImage
                src={image}
                alt={''}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Gallery
