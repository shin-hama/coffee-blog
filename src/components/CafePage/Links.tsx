import * as React from 'react'
import Link from 'next/link'

import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'

const iconParser = (link: string) => {
  const host = new URL(link).hostname
  if (host.startsWith('twitter')) {
    return faTwitter
  } else if (host.startsWith('instagram')) {
    return faInstagram
  } else if (host.startsWith('facebook')) {
    return faFacebook
  } else {
    return faGlobe
  }
}

type Props = {
  links: Array<string>
}
const Links: React.FC<Props> = ({ links }) => {
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      {links.map((link) => (
        <Link key={link} href={link}>
          <SvgIcon>
            <FontAwesomeIcon icon={iconParser(link)} />
          </SvgIcon>
        </Link>
      ))}
    </Stack>
  )
}

export default Links
