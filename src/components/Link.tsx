import * as React from 'react'
import NextLink from 'next/link'

import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'

type Props = MuiLinkProps
export const Link: React.FC<Props> = ({ href, children, ...props }) => {
  const isAbsoluteUrl = React.useMemo(() => {
    return href?.startsWith('http')
  }, [href])

  return (
    <MuiLink
      component={NextLink}
      href={href}
      {...props}
      target={isAbsoluteUrl ? '_blank' : undefined}
      rel={isAbsoluteUrl ? 'noopener noreferrer' : undefined}
    >
      {children}
    </MuiLink>
  )
}

export const NavLink: React.FC<Props> = (props) => {
  const style = {
    color: 'inherit',
    textDecoration: 'none'
  }
  return <Link {...props} sx={style} />
}
