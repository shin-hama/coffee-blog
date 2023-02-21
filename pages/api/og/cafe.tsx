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
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontStyle: 'bold',
            letterSpacing: '0.025em',
            color: 'white',
            marginTop: 60,
            padding: '0 120px',
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap'
          }}
        >
          Tokyo Cafe Catalog
        </div>
        <div
          style={{
            fontSize: 48,
            fontStyle: 'bold',
            letterSpacing: '-0.025em',
            color: 'white',
            marginBottom: 60,
            padding: '0 120px',
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap'
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 40,
            fontStyle: 'bold',
            letterSpacing: '-0.025em',
            color: 'white',
            marginBottom: 30,
            padding: '0 120px',
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap'
          }}
        >
          {city}
        </div>
        <div
          style={{
            fontSize: 28,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            color: 'white',
            marginTop: 30,
            padding: '0 120px',
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap'
          }}
        >
          coffee-junkie.jp
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  )
}
