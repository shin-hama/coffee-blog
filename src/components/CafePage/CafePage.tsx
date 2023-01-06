import * as React from 'react'

import Typography from '@mui/material/Typography'

import { ICafeFields } from '../../@types/contentful'

type Props = ICafeFields
const CafePage: React.FC<Props> = (cafe) => {
  return (
    <>
      <PageHeader></PageHeader>
      <Gallery></Gallery>
      <Typography>description</Typography>
      <Links></Links>
      {cafe.orders.map((item) => (
        <Order product={item} />
      ))}
      <Information></Information>
    </>
  )
}

export default CafePage
