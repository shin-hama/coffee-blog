import * as React from 'react'
import { NextRequest } from 'next/server'

import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const hasName = searchParams.has('name')
  const name = hasName ? searchParams.get('name')?.slice(0, 100) : 'Cafe'

  const hasCity = searchParams.has('city')
  const city = hasCity ? searchParams.get('city')?.slice(0, 100) : 'Tokyo'

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span>Tokyo Cafe Catalog</span>
        <span>{name}</span>
        <span>{city}</span>
        <span>coffee-junkie.jp</span>
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  )
}
