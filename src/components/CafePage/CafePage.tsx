import * as React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import { ICafeFields } from '../../@types/contentful'
import Gallery from './Gallery'
import Information from './Information'
import Order from './Order'
import PageHeader from './PageHeader'
import Research from './Research'

type Props = ICafeFields
const CafePage: React.FC<Props> = (cafe) => {
  console.log(cafe)
  return (
    <article>
      <Stack spacing={4}>
        <PageHeader {...cafe} />
        <Gallery images={cafe.photos.map((photo) => photo.fields.file.url)} />
        <Box>{documentToReactComponents(cafe.description)}</Box>
        <Grid container spacing={2}>
          {cafe.orders.map((item) => (
            <Grid item key={item.sys.id} xs={6} md={4}>
              <Order item={item.fields} />
            </Grid>
          ))}
        </Grid>
        <Research name={cafe.name} />
        <Information information={cafe.information.fields} />
      </Stack>
    </article>
  )
}

export default CafePage
