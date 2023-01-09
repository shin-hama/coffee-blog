import * as React from 'react'
import Head from 'next/head'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import Footer from './Footer'
import Header from './Header'

type Props = React.PropsWithChildren & {
  title: string
}
const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Toolbar />
      <Container maxWidth={false}>
        <main>
          <Box mx='auto' maxWidth='md' sx={{ py: 4 }}>
            {children}
          </Box>
        </main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
