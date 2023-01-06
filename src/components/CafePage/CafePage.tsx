import * as React from 'react'

import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'
import Gallery from './Gallery'
import Information from './Information'
import Links from './Links'
import Order from './Order'
import PageHeader from './PageHeader'

type Props = ICafeFields
const CafePage: React.FC<Props> = (cafe) => {
  return (
    <>
      <PageHeader />
      <Gallery images={cafe.photos.map((photo) => photo.fields.file.url)} />
      <Typography>
        description description description description description description
        description description description description description description
        description description description description description description
        description description description description description description
        description description description description description{' '}
      </Typography>
      <Links />
      {cafe.orders.map((item) => (
        <Order key={item.sys.id} src={item.fields.photo.fields.file.url} />
      ))}
      <Information />
    </>
  )
}

export default CafePage
