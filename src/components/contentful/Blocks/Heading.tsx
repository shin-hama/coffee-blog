import * as React from 'react'

import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Typography from '@mui/material/Typography'

import { createAnchor } from '../create-head-anchor'
import { getText } from './get-text'

export const Heading: NodeRenderer = (node, children) => {
  const text = getText(node.content)
  const anchor = text ? createAnchor(text) : ''

  const head = React.useMemo(() => {
    switch (node.nodeType) {
      case BLOCKS.HEADING_1:
        return 'h1'
      case BLOCKS.HEADING_2:
        return 'h2'
      case BLOCKS.HEADING_3:
        return 'h3'
      case BLOCKS.HEADING_4:
        return 'h4'
      case BLOCKS.HEADING_5:
        return 'h5'
      case BLOCKS.HEADING_6:
        return 'h6'

      default:
        return 'h1'
    }
  }, [node.nodeType])

  return (
    <Typography id={anchor} component={head} variant={head} gutterBottom>
      {children}
    </Typography>
  )
}
