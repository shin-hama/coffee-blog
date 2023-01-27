import * as React from 'react'

import {
  Options,
  documentToReactComponents
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link } from 'react-scroll'

import { getText } from './Blocks/get-text'
import { createAnchor } from './create-head-anchor'

type ItemProps = React.PropsWithChildren & {
  anchor: string
  depth?: number
}
const LinkToContent: React.FC<ItemProps> = ({
  anchor,
  depth = 0,
  children
}) => {
  const icon = depth === 0 ? faCircle : faCircleDot
  return (
    <ListItemButton
      component='label'
      disableRipple
      disableTouchRipple
      sx={{ pl: 4 * depth + 1 }}
    >
      <Link to={anchor} activeClass='active' smooth={true} duration={500}>
        <Stack direction='row' spacing={1} alignItems='baseline'>
          <FontAwesomeIcon size='2xs' icon={icon} color='#9D331F' />
          <Typography variant='subtitle2'>{children}</Typography>
        </Stack>
      </Link>
    </ListItemButton>
  )
}

const renderOption: Options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      const text = getText(node.content)
      const anchor = text ? createAnchor(text) : ''
      return <LinkToContent anchor={anchor}>{children}</LinkToContent>
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const text = getText(node.content)
      const anchor = text ? createAnchor(text) : ''
      return (
        <LinkToContent anchor={anchor} depth={1}>
          {children}
        </LinkToContent>
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
