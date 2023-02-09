import * as React from 'react'
import { useRouter } from 'next/router'

const AdSense = () => {
  const { asPath } = useRouter()

  React.useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    } catch (error) {
      console.error(error)
    }
  }, [asPath])

  return (
    <div key={asPath}>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-layout='xxx'
        data-ad-format='xxx'
        data-ad-client='xxx'
        data-ad-slot='xxx'
      />
    </div>
  )
}

export default AdSense
