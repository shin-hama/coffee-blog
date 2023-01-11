import * as React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { NavLink } from '../Link'
import ContentfulImage from './ContentfulImage'

type Props = {
  href: string
  title: string
  description?: string
  image?: string
}
/**
 * Contentful の Embedded Asset によるリンクをカード形式で表示するためのコンポーネント
 * @param param0
 * @returns
 */
const EmbeddedAssetCard: React.FC<Props> = ({
  href,
  title,
  description,
  image
}) => {
  return (
    <NavLink href={href}>
      <Card>
        <Stack
          direction='row'
          alignItems='start'
          justifyContent='space-between'
          height='140px'
          sx={{ maxHeight: '140px' }}
        >
          <CardContent>
            <Typography variant='h4'>{title}</Typography>
            <Typography
              variant='body1'
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2
              }}
            >
              {description}
            </Typography>
          </CardContent>
          {image && (
            <CardMedia>
              <Box
                position='relative'
                height='100%'
                sx={{ aspectRatio: '4/3' }}
              >
                <ContentfulImage
                  src={image}
                  alt=''
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </CardMedia>
          )}
        </Stack>
      </Card>
    </NavLink>
  )
}

export default EmbeddedAssetCard
