import * as React from 'react'
import Image from 'next/image'

import Box from '@mui/material/Box'

const BuyMeACoffee = () => {
  return (
    <a
      href='https://www.buymeacoffee.com/coppla'
      target='_blank'
      rel='noreferrer'
    >
      <Box display='flex' alignItems={'center'} justifyContent='center'>
        <Image
          loader={({ src }) => src}
          src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
          alt='Buy Me A Coffee'
          width={21.7 * 6}
          height={6.0 * 6}
          unoptimized
        />
      </Box>
    </a>
  )
}

export default BuyMeACoffee
