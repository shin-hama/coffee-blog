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
          background: 'darkgrey',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontStyle: 'bold',
              letterSpacing: '0.025em',
              color: 'white',
              marginTop: 0,
              padding: '0',
              lineHeight: 1,
              whiteSpace: 'pre-wrap'
            }}
          >
            Tokyo Cafe Catalog
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'bold',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 0,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap'
            }}
          >
            {name}
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontStyle: 'bold',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
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
              marginTop: 10,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap'
            }}
          >
            coffee-junkie.jp
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  )
}
