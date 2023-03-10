import * as React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IPost, isCafeContent } from '../../@types/verify-types'
import { buildPostUrl } from '../../lib/build-post-url'
import { NavLink } from '../Link'
import ContentfulImage from './ContentfulImage'

type Props = IPost
/**
 * Contentful の Embedded Asset によるリンクをカード形式で表示するためのコンポーネント
 * @returns
 */
const EntryLinkCard: React.FC<Props> = (props) => {
  const { fields } = props
  const path = buildPostUrl(props)

  const subTitle = React.useMemo(() => {
    if (isCafeContent(props)) {
      return props.fields.subTitle
    }

    return undefined
  }, [props])

  return (
    <NavLink href={path}>
      <Card>
        <Stack direction='row' height='140px' sx={{ maxHeight: '140px' }}>
          <CardContent sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography
              variant='h5'
              fontWeight='bold'
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2
              }}
            >
              {fields.title}
            </Typography>
            {subTitle && (
              <Typography
                variant='subtitle2'
                fontWeight='bold'
                sx={{
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1
                }}
              >
                {subTitle}
              </Typography>
            )}
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
          <CardMedia sx={{ display: 'block', height: '100%' }}>
            <Box
              position='relative'
              height='100%'
              sx={{ aspectRatio: { xs: '1/1', sm: '16/9' } }}
            >
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
