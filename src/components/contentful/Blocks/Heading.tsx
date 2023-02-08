import * as React from 'react'

import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { createAnchor } from '../create-head-anchor'
import { getText } from './get-text'

const StyledHeader = styled(Typography)(
  ({ theme }) => `
  margin-top: ${theme.spacing(4)};
  margin-bottom: ${theme.spacing(4)};

  &.h2 {
    color: ${theme.palette.grey[700]};
    padding-top: ${theme.spacing(1)};
    padding-bottom: ${theme.spacing(1)};
    border-top: solid 4px;
    border-bottom: solid 4px;
  }

  &.h3 {
    padding-bottom: ${theme.spacing(1)};
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      border-bottom: solid 2px #9D331F;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      border-bottom: solid 2px ${theme.palette.grey[400]};
    }
  }
`
)

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
    <StyledHeader id={anchor} variant={head} gutterBottom className={head}>
      {children}
    </StyledHeader>
  )
}
