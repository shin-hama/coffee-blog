import * as React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'
import RichTextRenderer from '../contentful/RichTextRenderer'
import Gallery from './Gallery'
import Information from './Information'
import Order from './Order'
import PageHeader from './PageHeader'
import Research from './Research'

type Props = ICafeFields
const CafePage: React.FC<Props> = (cafe) => {
  return (
    <article>
      <Stack spacing={4}>
        <PageHeader {...cafe} />
        <Gallery images={cafe.photos.map((photo) => photo.fields.file.url)} />
        <Box>
          <Typography variant='h2'>レビュー</Typography>
          <RichTextRenderer doc={cafe.content} />
        </Box>
        <Typography variant='h2'>注文品</Typography>
        <Box>
          <Grid container spacing={2}>
            {cafe.orders.map((item) => (
              <Grid item key={item.sys.id} xs={6} md={4}>
                <Order item={item.fields} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Research name={cafe.title} />
        <Typography variant='h2'>Cafe 情報</Typography>
        <Information information={cafe.information.fields} />
      </Stack>
    </article>
  )
}

export default CafePage
