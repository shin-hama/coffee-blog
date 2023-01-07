import * as React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import { ICafeFields } from '../../@types/contentful'
import Gallery from './Gallery'
import Information from './Information'
import Links from './Links'
import Order from './Order'
import PageHeader from './PageHeader'
import Research from './Research'

type Props = ICafeFields
const CafePage: React.FC<Props> = (cafe) => {
  console.log(cafe)
  return (
    <article>
      <Stack spacing={4}>
        <PageHeader />
        <Links links={cafe.links} />
        <Gallery images={cafe.photos.map((photo) => photo.fields.file.url)} />
        <Box>{documentToReactComponents(cafe.description)}</Box>
        <Stack spacing={2}>
          {cafe.orders.map((item) => (
            <Order key={item.sys.id} item={item.fields} />
          ))}
        </Stack>
        <Research name={cafe.name} />
        <Information information={cafe.information.fields} />
      </Stack>
    </article>
  )
}

export default CafePage
