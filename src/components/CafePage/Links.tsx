import * as React from 'react'

import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'

import { NavLink } from '../Link'

const iconParser = (link: string) => {
  const host = new URL(link).hostname
  console.log(host)
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
const Links: React.FC<Props> = ({ links }) => {
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      {links.map((link) => (
        <NavLink key={link} href={link}>
          <SvgIcon>
            <FontAwesomeIcon icon={iconParser(link)} />
          </SvgIcon>
        </NavLink>
      ))}
    </Stack>
  )
}

export default Links
