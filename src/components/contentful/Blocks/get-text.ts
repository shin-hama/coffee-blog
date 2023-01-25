import { Block, Inline, Text } from '@contentful/rich-text-types'

export const getText = (
  contents: (Block | Inline | Text)[] | (Inline | Text)[]
): string | null => {
  if (contents.length !== 1) {
    return null
  }

  const content = contents[0]
  if (content.nodeType === 'text') {
    return content.value
  } else {
    return getText(content.content)
  }
}
