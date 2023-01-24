import * as React from 'react'

import {
  Options,
  documentToReactComponents
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Link } from 'react-scroll'

import { createAnchor } from './create-head-anchor'

const renderOption: Options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      const anchor = createAnchor(node.content[0])
      return (
        <ListItem>
          <Link to={anchor} activeClass='active' smooth={true} duration={500}>
            <ListItemText>{children}</ListItemText>
          </Link>
        </ListItem>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const anchor = createAnchor(node.content[0])
      return (
        <ListItem>
          <Link to={anchor} activeClass='active' smooth={true} duration={500}>
            <ListItemText sx={{ pl: 4 }}>{children}</ListItemText>
          </Link>
        </ListItem>
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

  if (headings.length === 0) {
    // Head 項目がなければ表示しない
    return <></>
  }

  // 見出しのnodeTypeをdocumentとして利用
  const document: Document = {
    data: {},
    nodeType: BLOCKS.DOCUMENT,
    content: headings
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h4' component='h4'>
          目次
        </Typography>
        <List dense>{documentToReactComponents(document, renderOption)}</List>
      </CardContent>
    </Card>
  )
}

export default TableOfContents
