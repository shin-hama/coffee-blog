import * as React from 'react'

import {
  Options,
  documentToReactComponents
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { isCafeInformation, isPostEntry } from '../../@types/verify-types'
import Information from '../CafePage/Information'
import { Link } from '../Link'
import ContentfulImage from './ContentfulImage'
import EntryLinkCard from './EntryLinkCard'
import TableOfContents from './TableOfContents'
import { createAnchor } from './create-head-anchor'

const renderOption: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <Box position='relative' width='100%' sx={{ aspectRatio: '16/9' }}>
          <ContentfulImage
            src={node.data.target.fields.file.url}
            alt={node.data.target.fields.title}
            fill
            style={{ objectFit: 'contain' }}
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
      if (
        node.content.length > 1 &&
        node.content[1].nodeType !== INLINES.HYPERLINK
      ) {
        return children
      }
      return <Typography paragraph>{children}</Typography>
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <Typography component='h1' variant='h1' gutterBottom>
          {children}
        </Typography>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      const anchor = createAnchor(node.content[0])

      return (
        <Typography id={anchor} component='h2' variant='h2' gutterBottom>
          {children}
        </Typography>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const anchor = createAnchor(node.content[0])

      return (
        <Typography id={anchor} component='h3' variant='h3' gutterBottom>
          {children}
        </Typography>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return <Link href={node.data.uri}>{children}</Link>
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      const path = `/${node.data.target.sys.contentType.sys.id}s/${node.data.target.sys.id}`

      return <Link href={path}>{children}</Link>
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if (isCafeInformation(node.data.target)) {
        return (
          <Box mb={2}>
            <Information {...node.data.target.fields} />
          </Box>
        )
      } else {
        console.warn(
          `Not supported for ${node.nodeType} that content is ${node.data.target.sys.contentType.sys.id}`
        )
        return <></>
      }
    }
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
      <Box>{documentToReactComponents(doc, renderOption)}</Box>
    </Stack>
  )
}

export default RichTextRenderer
