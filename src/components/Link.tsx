import * as React from 'react'
import NextLink from 'next/link'

import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'

type Props = MuiLinkProps & {
  href: string
}
export const Link: React.FC<Props> = React.forwardRef(function Link(
  { href, children, ...props },
  ref
) {
  const isAbsoluteUrl = React.useMemo(() => {
    return href?.startsWith('http')
  }, [href])

  return (
    <MuiLink
      ref={ref}
      component={NextLink}
      href={href}
      {...props}
      target={isAbsoluteUrl ? '_blank' : undefined}
      rel={isAbsoluteUrl ? 'noopener noreferrer' : undefined}
    >
      {children}
    </MuiLink>
  )
})

export const NavLink: React.FC<Props> = React.forwardRef(function NavLink(
  props,
  ref
) {
  const style = {
    color: 'inherit',
    textDecoration: 'none'
  }
  return <Link ref={ref} {...props} sx={style} />
})
