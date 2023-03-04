import * as React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'

import Footer from './Footer'
import Head from './Head'
import Header from './Header'
import Navbar from './Navbar'

type Props = React.PropsWithChildren & {
  title: string
  description: string
  image?: string
}
const Layout: React.FC<Props> = ({ children, title, description, image }) => {
  return (
    <>
      <Head title={title} description={description} image={image} />
      <Header />
      <Toolbar />
      <Navbar />
      <Container maxWidth={false} sx={{ pt: 4 }}>
        <Stack spacing={4}>
          <main>
            <Box mx='auto' maxWidth='lg'>
              {children}
            </Box>
          </main>
          <Footer />
        </Stack>
      </Container>
    </>
  )
}

export default Layout
