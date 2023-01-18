import * as React from 'react'

import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stack from '@mui/material/Stack'

import { NavLink } from './Link'

const iconParser = (link: string) => {
  const host = new URL(link).hostname
  if (host.includes('twitter')) {
    return faTwitter
  } else if (host.includes('instagram')) {
    return faInstagram
  } else if (host.includes('facebook')) {
    return faFacebook
  } else {
    return faGlobe
  }
}

type Props = {
  links: Array<string>
}
const SocialLinks: React.FC<Props> = ({ links }) => {
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      {links.map((link) => (
        <NavLink key={link} href={link}>
          <FontAwesomeIcon size='xl' icon={iconParser(link)} />
        </NavLink>
      ))}
    </Stack>
  )
}

export default SocialLinks
