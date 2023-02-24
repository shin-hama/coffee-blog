import * as React from 'react'
import dynamic from 'next/dynamic'

import {
  Options,
  documentToReactComponents
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { isPostEntry } from '../../@types/verify-types'
import { buildPostUrl } from '../../lib/build-post-url'
import { Link } from '../Link'
import { Blockquote } from './Blocks/Blockquote'
import { Heading } from './Blocks/Heading'
import { Table, TableCell, TableHeadCell, TableRow } from './Blocks/Table'
import { getText } from './Blocks/get-text'
import ContentfulImage from './ContentfulImage'
import EntryLinkCard from './EntryLinkCard'
import { renderInlineEntry } from './InlineEntry/render-inline-entry'
import TableOfContents from './TableOfContents'

const IFrameWrapper = dynamic(
  () => import('./Blocks/IFrameWrapper').then((module) => module.IFrameWrapper),
  { ssr: false }
)

const renderOption: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <Box
          position='relative'
          width='100%'
          mb={2}
          sx={{ aspectRatio: '16/9' }}
        >
          <ContentfulImage
            src={node.data.target.fields.file.url}
            alt={node.data.target.fields.title}
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </Box>
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = node.data.target
      if (isPostEntry(entry)) {
        return (
          <Box mb={2}>
            <EntryLinkCard {...entry} />
          </Box>
        )
      } else {
        console.warn(
          `Not support to embed this entry: ${entry.sys.contentType.sys.id}`
        )
        return
      }
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content.length > 1) {
        return children
      }
      const text = getText(node.content)
      if (text?.startsWith('<iframe')) {
        return <IFrameWrapper htmlStr={text} />
      }

      return <Typography paragraph>{children}</Typography>
    },
    [BLOCKS.HEADING_1]: Heading,
    [BLOCKS.HEADING_2]: Heading,
    [BLOCKS.HEADING_3]: Heading,
    [BLOCKS.QUOTE]: Blockquote,
    [BLOCKS.TABLE]: Table,
    [BLOCKS.TABLE_ROW]: TableRow,
    [BLOCKS.TABLE_CELL]: TableCell,
    [BLOCKS.TABLE_HEADER_CELL]: TableHeadCell,
    [INLINES.HYPERLINK]: (node) => {
      const text = getText(node.content)

      return <Link href={node.data.uri}>{text}</Link>
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      if (isPostEntry(node.data.target)) {
        const path = buildPostUrl(node.data.target)

        return <Link href={path}>{children}</Link>
      }

      return children
    },
    [INLINES.EMBEDDED_ENTRY]: renderInlineEntry
  },
  renderText: undefined,
  renderMark: undefined
}

type Props = {
  doc: Document
}
const RichTextRenderer: React.FC<Props> = ({ doc }) => {
  return (
    <Stack spacing={4}>
      <TableOfContents doc={doc} />
      <Box sx={{ overflow: 'hidden' }}>
        {documentToReactComponents(doc, renderOption)}
      </Box>
    </Stack>
  )
}

export default RichTextRenderer
