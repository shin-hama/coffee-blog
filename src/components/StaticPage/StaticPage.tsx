import * as React from 'react'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IStaticPageFields } from '../../@types/contentful'
import ContentfulImage from '../contentful/ContentfulImage'
import RichTextRenderer from '../contentful/RichTextRenderer'

type Props = IStaticPageFields
const StaticPage: React.FC<Props> = ({ title, content, thumbnail }) => {
  return (
    <Stack spacing={2}>
      <Typography variant='h1'>{title}</Typography>
      <Box position='relative' width='100%' sx={{ aspectRatio: '16/9' }}>
        <ContentfulImage
          src={thumbnail.fields.file.url}
          alt=''
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <RichTextRenderer doc={content} />
    </Stack>
  )
}

export default StaticPage
