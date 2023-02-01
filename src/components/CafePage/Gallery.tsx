import * as React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { useSwipeable } from 'react-swipeable'

import ContentfulImage from '../contentful/ContentfulImage'

const Thumbnail = styled(Box)(
  ({ theme }) => `
  display: inline-block;
  padding: 2px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${theme.palette.grey[400]};
  }

  &.selected {
    border: 2px solid ${theme.palette.text.primary}
  }
`
)

type Props = {
  images: Array<string>
}
const Gallery: React.FC<Props> = ({ images }) => {
  const [index, setIndex] = React.useState(0)
  const handler = useSwipeable({
    onSwipedLeft: () => {
      setIndex((prev) => {
        if (prev < images.length - 1) {
          return prev + 1
        } else {
          return prev
        }
      })
    },
    onSwipedRight: () => {
      setIndex((prev) => {
        if (prev > 0) {
          return prev - 1
        } else {
          return prev
        }
      })
    },
    trackMouse: true
  })

  return (
    <Box width='100%' maxHeight='400px' sx={{ aspectRatio: '1/1' }}>
      <Stack spacing={2} height='100%'>
        <Box
          position='relative'
          color='white'
          height='80%'
          bgcolor={(theme) => theme.palette.text.primary}
          onDragStart={(event) => event.preventDefault()}
          {...handler}
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
            <Thumbnail
              key={image}
              sx={{ aspectRatio: '1/1' }}
              className={i === index ? 'selected' : ''}
            >
              <Box
                height='100%'
                position='relative'
                onClick={() => setIndex(i)}
              >
                <ContentfulImage
                  src={image}
                  alt={''}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Thumbnail>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Gallery
