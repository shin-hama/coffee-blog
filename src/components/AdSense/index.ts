import dynamic from 'next/dynamic'

export default dynamic(() => import('./AdSense'), {
  ssr: false
})
