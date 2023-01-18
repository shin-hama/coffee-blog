import * as React from 'react'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { siteConfig } from '../../../site.config'
import { NavLink } from '../Link'
import SocialLinks from '../SocialLinks'

const Footer = () => {
  return (
    <footer>
      <Stack spacing={1} alignItems='center'>
        <SocialLinks links={siteConfig.socials} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='space-between'
          alignItems='center'
          width='100%'
          spacing={1}
          paddingY={1}
        >
          <Stack
            direction='row'
            divider={<Divider orientation='vertical' flexItem />}
            spacing={2}
          >
            <NavLink href='/privacy-policy'>プライバシーポリシー</NavLink>
            <NavLink href='https://forms.gle/K1uAXmEgjEpjBviy8'>
              お問い合わせ
            </NavLink>
          </Stack>
          <Typography>Copyright 2022 - Tokyo Cafe Catalog</Typography>
        </Stack>
      </Stack>
    </footer>
  )
}

export default Footer
