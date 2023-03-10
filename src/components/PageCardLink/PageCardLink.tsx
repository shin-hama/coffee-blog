import * as React from 'react'

import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IPost } from '../../@types/verify-types'
import { parseCardLinkProps } from '../../lib/parse-post'
import { NavLink } from '../Link'
import ContentfulImage from '../contentful/ContentfulImage'

type Props = IPost
const PageCardLink: React.FC<Props> = (props) => {
  const { title, href, img, subTitle, tag, createdAt } =
    parseCardLinkProps(props)

  return (
    <NavLink href={href}>
      <Stack spacing={2}>
        <div
          style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}
        >
          <ContentfulImage
            src={img}
            alt=''
            priority={true}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <Stack spacing={1}>
          <Box>
            <Typography variant='h6' fontWeight='bold'>
              {title}
            </Typography>
            {subTitle && (
              <Typography variant='subtitle2'>{subTitle}</Typography>
            )}
          </Box>
          <Stack spacing={2} direction='row' alignItems='center'>
            <Chip label={tag} />
            <Stack direction='row' alignItems='center' spacing={0.5}>
              <FontAwesomeIcon icon={faPen} />
              <Typography variant='subtitle2'>{createdAt}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </NavLink>
  )
}

export default PageCardLink
