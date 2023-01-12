import * as React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IPost } from '../../@types/verify-types'
import { NavLink } from '../Link'
import ContentfulImage from './ContentfulImage'

type Props = IPost
/**
 * Contentful の Embedded Asset によるリンクをカード形式で表示するためのコンポーネント
 * @returns
 */
const EntryLinkCard: React.FC<Props> = ({ sys, fields }) => {
  const path = `/${sys.contentType.sys.id}s/${sys.id}`

  return (
    <NavLink href={path}>
      <Card>
        <Stack
          direction='row'
          alignItems='start'
          justifyContent='space-between'
          height='140px'
          sx={{ maxHeight: '140px' }}
        >
          <CardContent>
            <Typography variant='h4' noWrap>
              {fields.title}
            </Typography>
            <Typography
              variant='caption'
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3
              }}
            >
              {fields.description}
            </Typography>
          </CardContent>
          <CardMedia sx={{ height: '100%' }}>
            <Box position='relative' height='100%' sx={{ aspectRatio: '4/3' }}>
              <ContentfulImage
                src={fields.thumbnail.fields.file.url}
                alt=''
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </CardMedia>
        </Stack>
      </Card>
    </NavLink>
  )
}

export default EntryLinkCard
