import * as React from 'react'
import Head from 'next/head'

import Container from '@mui/material/Container'

import Footer from './Footer'

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
      <Container maxWidth={false}>
        <main>
          <Container maxWidth='md' sx={{ py: 4 }}>
            {children}
          </Container>
        </main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
