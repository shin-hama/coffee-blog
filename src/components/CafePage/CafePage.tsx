import * as React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'
import AdSense from '../AdSense'
import CafeInformation from '../contentful/InlineEntry/CafeInformation'
import RichTextRenderer from '../contentful/RichTextRenderer'
import Gallery from './Gallery'
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
        {cafe.recommends && (
          <Box>
            <Typography component='h2' variant='h2'>
              {cafe.title}のおすすめポイント
            </Typography>
            <ul>
              {cafe.recommends.map((line) => (
                <li key={line}>
                  <Typography variant='h6' gutterBottom>
                    {line}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        )}
        <AdSense unitType='article' />
        <Typography variant='h2'>{cafe.title}を訪れた感想</Typography>
        <RichTextRenderer doc={cafe.content} />
        <Typography variant='h2'>注文品</Typography>
        <Box>
          <Grid container spacing={2}>
            {cafe.orders.map((item) => (
              <Grid item key={item.sys.id} xs={12} sm={6} md={4}>
                <Order item={item.fields} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {cafe.instagram && <Research name={cafe.instagram} />}
        <Typography variant='h2'>{cafe.title}の営業情報</Typography>
        <CafeInformation {...cafe.information.fields} />
      </Stack>
    </article>
  )
}

export default CafePage
