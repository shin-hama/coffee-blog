import * as React from 'react'

import Stack from '@mui/material/Stack'

type Props = {
  title: string
  url: string
}
const PageFooter: React.FC<Props> = ({ title, url }) => {
  return <Stack spacing={2}></Stack>
}

export default PageFooter
