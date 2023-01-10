import * as React from 'react'

import {
  Options,
  documentToReactComponents
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import Typography from '@mui/material/Typography'

import ContentfulImage from './ContentfulImage'

const renderOption: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      console.log(node)
      return (
        <ContentfulImage
          src={node.data.target.fields.file.url}
          alt={'node.data.target.fields.file.name'}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
        />
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      console.log(node)
      console.log(children)
      return <>link to entry</>
    }
  },
  renderText: (text) => <Typography variant='body1'>{text}</Typography>,
  renderMark: undefined
}

type Props = {
  doc: Document
}
const RichTextRenderer: React.FC<Props> = ({ doc }) => {
  return <>{documentToReactComponents(doc, renderOption)}</>
}

export default RichTextRenderer
