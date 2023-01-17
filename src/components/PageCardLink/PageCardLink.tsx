import * as React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { IBlogFields, ICafeFields } from '../../@types/contentful'
import { IPost } from '../../@types/verify-types'
import { NavLink } from '../Link'
import ContentfulImage from '../contentful/ContentfulImage'
import BlogCardDetail from './BlogCardDetail'
import CafeCardDetail from './CafeCardDetail'

type Props = IPost
const PageCardLink: React.FC<Props> = ({
  fields: { title, thumbnail, ...rest },
  sys
}) => {
  const renderDetail = (id: IPost['sys']['id']) => {
    switch (id) {
      case 'blog':
        return <BlogCardDetail {...(rest as IBlogFields)} />
      case 'cafe':
        return <CafeCardDetail {...(rest as ICafeFields)} />
      default:
        console.error(`Not supported content`)

        throw Error('Not supported content')
    }
  }

  return (
    <NavLink href={`/${sys.contentType.sys.id}s/${sys.id}`}>
      <Card>
        <CardMedia sx={{ height: '250px' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <ContentfulImage
              src={thumbnail.fields.file.url}
              alt=''
              priority={true}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </CardMedia>
        <CardContent>
          <Stack spacing={1}>
            <Typography variant='h4'>{title}</Typography>
            {renderDetail(sys.contentType.sys.id)}
          </Stack>
        </CardContent>
      </Card>
    </NavLink>
  )
}

export default PageCardLink