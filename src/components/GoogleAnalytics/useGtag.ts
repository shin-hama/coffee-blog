import * as React from 'react'

import { gtagId } from '../../lib/config'

export const useGtag = () => {
  const actions = React.useMemo(() => {
    const a = {
      // PVを測定する
      pageView: (path: string) => {
        window.gtag('config', gtagId, {
          page_path: path
        })
      },

      // GAイベントを発火させる
      event: ({
        action,
        category,
        label,
        value = ''
      }: {
        action: Gtag.EventNames
        category: string
        label: string
        value?: string
      }) => {
        window.gtag('event', action, {
          event_category: category,
          event_label: JSON.stringify(label),
          value
        })
      }
    }
    return a
  }, [])

  return actions
}
