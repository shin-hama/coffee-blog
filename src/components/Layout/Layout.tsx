import * as React from 'react'
import Head from 'next/head'

import Footer from './Footer'

type Props = React.PropsWithChildren & {
  title: string
}
const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  )
}
