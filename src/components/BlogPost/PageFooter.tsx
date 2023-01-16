import * as React from 'react'

import Stack from '@mui/material/Stack'

import Bio from './Bio'
import ShareButtons from './ShareButtons'

type Props = {
  title: string
  url: string
}
const PageFooter: React.FC<Props> = ({ title, url }) => {
  return (
    <Stack>
      <Bio />
      <ShareButtons msg={title} url={url} />
    </Stack>
  )
}

export default PageFooter
