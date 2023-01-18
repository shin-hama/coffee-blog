import * as React from 'react'

import Stack from '@mui/material/Stack'
import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  LineIcon,
  LineShareButton,
  PocketIcon,
  PocketShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'

const iconSize = 32

type Props = {
  msg: string // 共有時のメッセージ
  url: string
}
const ShareButtons: React.FC<Props> = ({ url, msg }) => {
  return (
    <Stack
      direction='row'
      spacing={1}
      justifyContent='space-around'
      alignItems='center'
      width='100%'
      sx={{
        button: {
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }}
    >
      <TwitterShareButton
        url={url}
        title={msg}
        style={{ backgroundColor: '#00aced' }}
      >
        <TwitterIcon size={iconSize} />
      </TwitterShareButton>
      <FacebookShareButton
        url={url}
        quote={msg}
        style={{ backgroundColor: '#3b5998' }}
      >
        <FacebookIcon size={iconSize} />
      </FacebookShareButton>
      <HatenaShareButton
        url={url}
        title={msg}
        style={{ backgroundColor: '#009ad9' }}
      >
        <HatenaIcon size={iconSize} />
      </HatenaShareButton>
      <PocketShareButton
        url={url}
        title={msg}
        style={{ backgroundColor: '#EF3F56' }}
      >
        <PocketIcon size={iconSize} />
      </PocketShareButton>
      <LineShareButton
        url={url}
        title={msg}
        style={{ backgroundColor: '#00b800' }}
      >
        <LineIcon size={iconSize} />
      </LineShareButton>
    </Stack>
  )
}

export default ShareButtons
