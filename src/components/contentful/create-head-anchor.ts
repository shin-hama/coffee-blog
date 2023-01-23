import { Block, Inline, Text } from '@contentful/rich-text-types'
import crypto from 'crypto'

export const createAnchor = (node: Block | Inline | Text) => {
  if (node.nodeType === 'text') {
    console.log(crypto.getHashes())
    const anchor = crypto.createHash('md5').update(node.value).digest('hex')

    return anchor
  } else {
    return ''
  }
}
