import * as React from 'react'

import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const BlockquoteBox = styled(Box)(
  ({ theme }) => `
  color: ${theme.palette.grey[600]};
  borderLeft: 4px solid ${theme.palette.grey[400]};
`
)

export const Blockquote: NodeRenderer = (node, children) => {
  return (
    <BlockquoteBox>
      <Box component='blockquote'>{children}</Box>
    </BlockquoteBox>
  )
}
