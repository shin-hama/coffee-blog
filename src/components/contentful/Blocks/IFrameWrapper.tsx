import * as React from 'react'

import Box from '@mui/material/Box'

type Props = {
  htmlStr: string
}
export const IFrameWrapper: React.FC<Props> = ({ htmlStr }) => {
  return (
    <Box pb={2}>
      <div dangerouslySetInnerHTML={{ __html: htmlStr }} />
    </Box>
  )
}
