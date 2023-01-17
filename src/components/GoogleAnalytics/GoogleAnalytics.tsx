import * as React from 'react'
import Script from 'next/script'

import { gtagId } from '../../lib/config'
import { usePageView } from './usePageView'

const GoogleAnalytics = () => {
  usePageView()

  return (
    <>
      <Script
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
        strategy='afterInteractive'
      />
      <Script id='ga' defer strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagId}');
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics
