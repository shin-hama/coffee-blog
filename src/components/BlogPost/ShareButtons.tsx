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

const iconSize = 24

type Props = {
  msg: string // 共有時のメッセージ
  url: string
}
const ShareButtons: React.FC<Props> = ({ url, msg }) => {
  return (
    <Stack direction='row' spacing={1}>
      <TwitterShareButton url={url} title={msg}>
        <TwitterIcon size={iconSize} round />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={msg}>
        <FacebookIcon size={iconSize} round />
      </FacebookShareButton>
      <PocketShareButton url={url} title={msg}>
        <PocketIcon size={iconSize} round />
      </PocketShareButton>
      <LineShareButton url={url} title={msg}>
        <LineIcon size={iconSize} round />
      </LineShareButton>
      <HatenaShareButton url={url} title={msg}>
        <HatenaIcon size={iconSize} round />
      </HatenaShareButton>
    </Stack>
  )
}

export default ShareButtons
