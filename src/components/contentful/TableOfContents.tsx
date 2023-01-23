import * as React from 'react'

import {
  Options,
  documentToReactComponents
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const renderOption: Options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <Typography component='h2' variant='h2' gutterBottom>
          {children}
        </Typography>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <Typography component='h3' variant='h3' gutterBottom>
          {children}
        </Typography>
      )
    }
  },
  renderText: undefined,
  renderMark: undefined
}

type Props = {
  doc: Document
}
const TableOfContents: React.FC<Props> = ({ doc }) => {
  // Contentfulの見出しを定義
  const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3]

  // 見出しを配列で格納
  const headings = doc.content.filter((item) =>
    headingTypes.includes(item.nodeType)
  )

  console.log(doc)

  // 見出しのnodeTypeをdocumentとして利用
  const document: Document = {
    data: {},
    nodeType: BLOCKS.DOCUMENT,
    content: headings
  }

  return (
    <Box component='nav'>
      {documentToReactComponents(document, renderOption)}
    </Box>
  )
}

export default TableOfContents
