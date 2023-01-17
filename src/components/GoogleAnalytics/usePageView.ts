import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useGtag } from './useGtag'

export const usePageView = () => {
  const { pageView } = useGtag()
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (path: string) => {
      pageView(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [pageView, router.events])
}
