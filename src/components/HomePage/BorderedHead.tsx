import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = React.PropsWithChildren
const BorderedHead: React.FC<Props> = ({ children }) => {
  return (
    <Box
      pb={2}
      sx={{
        borderBottom: (theme) => `solid 1px ${theme.palette.grey[400]}`
      }}
    >
      <Typography variant='h2'>{children}</Typography>
    </Box>
  )
}

export default BorderedHead
