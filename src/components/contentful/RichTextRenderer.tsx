import * as React from 'react'

import {
  Options,
  documentToReactComponents
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { IBlog, ICafe } from '../../@types/contentful'
import { Link } from '../Link'
import ContentfulImage from './ContentfulImage'
import EmbeddedAssetCard from './EmbeddedAssetCard'

const isPostEntry = (target: any): target is IBlog | ICafe => {
  return (
    target !== null &&
    target !== undefined &&
    (target.sys?.contentType?.sys?.id === 'cafe' ||
      target.sys?.contentType?.sys?.id === 'blog')
  )
}

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
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const entry = node.data.target
      if (isPostEntry(entry)) {
        const path = `/${entry.sys.contentType.sys.id}s/${entry.sys.id}`

        return (
          <EmbeddedAssetCard
            href={path}
            title={entry.fields.title}
            description={entry.fields.description}
            image={entry.fields.thumbnail.fields.file.url}
          />
        )
      } else {
        console.warn(
          `Not support to embed this entry: ${entry.sys.contentType.sys.id}`
        )
        return
      }
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
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
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return <Link href={node.data.uri}>{children}</Link>
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      const path = `/${node.data.target.sys.contentType.sys.id}s/${node.data.target.sys.id}`

      return <Link href={path}>{children}</Link>
    }
  },
  renderText: undefined,
  renderMark: undefined
}

type Props = {
  doc: Document
}
const RichTextRenderer: React.FC<Props> = ({ doc }) => {
  return <>{documentToReactComponents(doc, renderOption)}</>
}

export default RichTextRenderer
