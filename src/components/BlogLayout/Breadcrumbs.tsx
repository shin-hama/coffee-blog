import * as React from 'react'

import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'

import { Link } from '../Link'
import { useRouter } from 'next/router'

const breadcrumbNameMap: Record<string, string> = {
  blogs: "blogs",
  cafes: "cafes"
}

type Props = {
  title: string
}
const Breadcrumbs: React.FC<Props> = ({ title: title }) => {
  const router = useRouter()
  const pathnames = router.asPath.split("/").filter((x) => x)

  return (
    <MuiBreadcrumbs
      sx={{
        overflowX: 'scroll',
        textDecoration: 'none',
        color: (theme) => theme.palette.grey[600],
        ol: {
          overflowX: 'scroll',
          flexWrap: "nowrap"
        },
        li: {
          whiteSpace: 'nowrap'
        }
      }}
    >
      <Link href='/' color="inherit">
        Home
      </Link>
      {pathnames.map((path, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography noWrap>{title}</Typography>
        ) : (
          <Link href={to} key={to} color="inherit">
            {breadcrumbNameMap[to] || path}
          </Link>
        )
      })}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs
