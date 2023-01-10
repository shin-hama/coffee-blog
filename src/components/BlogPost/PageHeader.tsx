import * as React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

type Props = {
  title: string
  createdAt: string
  updatedAt?: string
  tags?: Array<string>
}
const PageHeader: React.FC<Props> = ({ title, createdAt, updatedAt, tags }) => {
  return (
    <Stack>
      <Typography variant='h1'>{title}</Typography>
      <Stack direction='row' spacing={1}>
        <Typography variant='subtitle2'>{createdAt}</Typography>
        <Typography variant='subtitle2'>{updatedAt}</Typography>
      </Stack>
      <Stack direction='row' spacing={1}>
        {tags?.map((tag) => (
          <Typography key={tag}>{tag}</Typography>
        ))}
      </Stack>
    </Stack>
  )
}

export default PageHeader
