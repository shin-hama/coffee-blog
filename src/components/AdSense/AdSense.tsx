import * as React from 'react'
import { useRouter } from 'next/router'

type UnitType = 'display' | 'infeed' | 'multiplex'

const InfeedUnit = () => {
  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-layout='in-article'
      data-ad-format='fluid'
      data-ad-client='ca-pub-8908594530879602'
      data-ad-slot='6307548930'
    ></ins>
  )
}

const DisplayUnit = () => {
  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-8908594530879602'
      data-ad-slot='1728449174'
      data-ad-format='auto'
      data-full-width-responsive='true'
    ></ins>
  )
}

const MultiplexUnit = () => {
  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-format='autorelaxed'
      data-ad-client='ca-pub-8908594530879602'
      data-ad-slot='6941688349'
    ></ins>
  )
}

type Props = {
  unitType?: UnitType
}
const AdSense: React.FC<Props> = ({ unitType = 'display' }) => {
  const { asPath } = useRouter()

  React.useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    } catch (error) {
      console.error(error)
    }
  }, [asPath])

  const renderer = (_unit: UnitType) => {
    switch (_unit) {
      case 'display':
        return <DisplayUnit />

      case 'infeed':
        return <InfeedUnit />

      case 'multiplex':
        return <MultiplexUnit />

      default:
        console.warn(`Not supported unit type: ${_unit}`)
        // render default unit
        return <DisplayUnit />
    }
  }

  return <div key={asPath}>{renderer(unitType)}</div>
}

export default AdSense