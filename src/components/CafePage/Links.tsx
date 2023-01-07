import * as React from 'react'
import Link from 'next/link'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'

type Props = {
  links: Array<string>
}
const Links: React.FC<Props> = ({ links }) => {
  return (
    <Stack direction='row' spacing={1}>
      {links.map((link) => (
        <Link key={link} href={link}>
          <SvgIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </SvgIcon>
        </Link>
      ))}
    </Stack>
  )
}

export default Links
