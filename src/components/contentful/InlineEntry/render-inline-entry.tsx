import * as React from 'react'

import { Block, Inline } from '@contentful/rich-text-types'
import Box from '@mui/material/Box'

import { isCafeInformation, isCoffeeBeans } from '../../../@types/verify-types'
import CafeInformation from './CafeInformation'
import CoffeeBeans from './CoffeeBeans'

export const renderInlineEntry = (node: Block | Inline) => {
  const renderer = (_node: Block | Inline) => {
    const { target } = _node.data
    if (isCafeInformation(target)) {
      return <CafeInformation {...target.fields} />
    } else if (isCoffeeBeans(target)) {
      return <CoffeeBeans {...target.fields} />
    } else {
      const msg = `Not supported for ${_node.nodeType} that content is ${_node.data.target.sys.id}`

      console.warn(msg)
      return <>{msg}</>
    }
  }

  return <Box mb={2}>{renderer(node)}</Box>
}
